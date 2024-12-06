import { initReactQueryAuth } from "react-query-auth";

import { Spinner } from "@/components/elements";

import {
  loginWithEmailAndPassword,
  getUser,
  UserResponse,
  LoginCredentialsDTO,
  AuthUser,
} from "@/features/auth";

import storage from "@/utils/storage";

function createTestUser(): AuthUser {
  return {
    userid: "testuser",
    username: "testuser",
    firstName: "test",
    lastName: "user",
    role: "ADMIN",
  };
}

async function handleUserResponse(data: UserResponse) {
  const { token, user } = data;
  storage.setToken(token ?? "");
  return user;
}

async function loadUser() {
  // if (import.meta.env.MODE === "development") {
  //   return createTestUser();
  // }
  if (storage.getToken()) {
    try {
      const data = await getUser();
      return data.user;
    } catch (err) {
      return null;
    }
  }
  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

async function registerFn(): Promise<AuthUser | null> {
  // TODO: implement registration
  return null;
}

const authConfig = {
  loadUser,
  loginFn,
  logoutFn,
  registerFn,
  LoaderComponent() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown,
  LoginCredentialsDTO
>(authConfig);
