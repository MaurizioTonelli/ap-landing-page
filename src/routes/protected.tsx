import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Spinner } from "@/components/elements";
import DashboardLayout from "@/components/DashboardLayout";
import AuthGuard from "@/features/auth/components/AuthGuard";

const App = () => {
  return (
    <DashboardLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </DashboardLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/app",
    element: (
      <AuthGuard>
        <App />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="/dashboard" />,
      },

      { path: "*", element: <Navigate to="/dashboard" /> },
    ],
  },
];
