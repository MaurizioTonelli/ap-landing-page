import Loading from "@/features/misc/routes/Loading";
import { useAuth } from "@/lib/auth";
import { useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const auth = useAuth();
  const commonRoutes = [{ path: "/", element: <Loading /> }];
  const routes = auth.user ? protectedRoutes : publicRoutes;
  const element = useRoutes([
    ...protectedRoutes,
    ...publicRoutes,
    ...commonRoutes,
  ]);

  return <>{element}</>;
};
