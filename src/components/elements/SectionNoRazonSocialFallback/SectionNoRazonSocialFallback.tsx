import { Alert, AlertTitle } from "@mui/material";

export const SectionNoRazonSocialFallback = () => {
  return (
    <Alert severity="warning">
      <AlertTitle>Alerta</AlertTitle>
      Selecciona una o más razones sociales para ver los datos.
    </Alert>
  );
};
