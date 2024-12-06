import { useAuth } from "@/lib/auth";
import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const location = useLocation();

  const currentSection = location.pathname.split("/")[2];

  return (
    <>
      {user && children}
      {!user && <Navigate to="/auth/login" />}
    </>
  );
}
