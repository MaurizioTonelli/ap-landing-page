import { Spinner } from "@/components/elements/Spinner";
import { AuthProvider } from "@/lib/auth";
import { Button } from "@mui/material";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { queryClient } from "@/lib/react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ups, algo salio mal :( </h2>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Actualizar página
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
          <AuthProvider>
            <Router>{children}</Router>
          </AuthProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
