import { Alert, AlertTitle } from "@mui/material";

export const SectionNoProyectoFallback = () => {
  return (
    <Alert severity="warning">
      <AlertTitle>Alerta</AlertTitle>
      Selecciona uno o más proyectos para ver los datos.
    </Alert>
  );
};
