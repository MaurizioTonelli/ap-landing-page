import { Link } from "react-router-dom";
import * as z from "zod";

import { AppButton } from "@/components/elements/AppButton";
import { Form, InputField } from "@/components/form";
import { axios } from "@/lib/axios";
import storage from "@/utils/storage";
import { useAuth } from "@/lib/auth";
// import { useAuth } from "@/lib/auth";

const schema = z.object({
  username: z.string().min(1, "Requerido"),
  password: z.string().min(1, "Requerido"),
});

type LoginValues = {
  user: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  async function probarAutenticacion() {
    const response = await axios.post("/auth/me");
  }

  const { login, isLoggingIn } = useAuth();

  return (
    <div>
      <Form<LoginValues, typeof schema>
        onSubmit={async (values: any) => {
          await login(values);
          onSuccess();
        }}
        schema={schema}
      >
        {({ register, formState }: any) => (
          <>
            <InputField
              type="text"
              label="Usuario"
              error={formState.errors["username"]}
              registration={register("username")}
            />
            <InputField
              type="password"
              label="Contraseña"
              error={formState.errors["password"]}
              registration={register("password")}
            />
            <div>
              <AppButton type="submit" isLoading={isLoggingIn}>
                Iniciar sesión
              </AppButton>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};
