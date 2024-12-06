import { Alert, AlertTitle } from "@mui/material";

export const SectionErrorFallback = ({ error }: { error: any }) => {
  console.log(error);
  const errorSeverity = error.status == 403 ? "warning" : "error";
  const getErrorElement = () => {
    if (error.status == 403) {
      return (
        <>
          <AlertTitle>Aviso</AlertTitle>
          {error.response.data.mensaje}. Clave del permiso:{" "}
          {error.response.data.clavePermiso}
        </>
      );
    } else {
      return (
        <>
          <AlertTitle>Error</AlertTitle>
          Ocurrió un error al cargar esta sección, revisa tu conexión e
          inténtalo de nuevo.
        </>
      );
    }
  };
  return <Alert severity={errorSeverity}>{getErrorElement()}</Alert>;
};
