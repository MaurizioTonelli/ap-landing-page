import { axios } from "@/lib/axios";

import { AuthUser, UserResponse } from "../types";

export const getUser = (): Promise<UserResponse> => {
  return axios.post("/auth/me");
};
