export type AuthUser = {
  userid: string;
  id?: string;
  username: string;
  firstName: string;
  lastName: string;
  role: "ADMIN" | "USER";
};

export type UserResponse = {
  token?: string;
  user: AuthUser;
};
