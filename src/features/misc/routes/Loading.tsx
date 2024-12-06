import { Spinner } from "@/components/elements";
import { GenericCenteredPage } from "@/components/layout";
import { useAuth } from "@/lib/auth";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Loading() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/app/dashboard");
    } else {
      navigate("/auth/login");
    }
  }, [user]);

  return (
    <GenericCenteredPage title="">
      <div className="flex flex-col gap-4 items-center">
        <Typography variant="h5">Cargando...</Typography>
        <Spinner size="xl" />
      </div>
    </GenericCenteredPage>
  );
}
