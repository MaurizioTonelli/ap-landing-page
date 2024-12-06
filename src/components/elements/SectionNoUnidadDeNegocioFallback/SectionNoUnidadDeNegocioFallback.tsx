import { Alert, AlertTitle } from "@mui/material";

export const SectionNoUnidadDeNegocioFallback = () => {
  return (
    <Alert severity="warning">
      <AlertTitle>Alerta</AlertTitle>
      Selecciona una o más unidades de negocio para ver los datos.
    </Alert>
  );
};
