import { GenericCenteredPage } from "@/components/layout";
import storage from "@/utils/storage";
import { useNavigate } from "react-router";

import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <GenericCenteredPage title="Inicia sesión">
      <LoginForm
        onSuccess={() => {
          if (storage.getToken()) {
            navigate("/app/dashboard");
          } else {
            alert("No token");
          }
        }}
      />
    </GenericCenteredPage>
  );
};
