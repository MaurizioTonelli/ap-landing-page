import { Alert, Box, Button, Card, Typography } from "@mui/material";
import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SectionErrorFallback } from "@/components/elements/SectionErrorFallback";

// Esta SectionCard no requiere que se seleccione un proyecto para mostrarse
type FreeSectionCardProps = {
  status?: "mocked_data" | "in_progress" | "not_implemented";
  className?: string;
  title: string;
  subtitle?: string;
  hasAction?: boolean;
  onActionClick?: any;
  actionText?: string;
  children: ReactNode;
  sx?: any;
};

export const FreeSectionCard = ({
  status,
  className,
  sx,
  hasAction = false,
  onActionClick,
  actionText,
  title,
  subtitle = "",
  children,
}: FreeSectionCardProps) => {
  return (
    <Card
      sx={sx}
      className={"p-4 sm:p-8 flex flex-1 flex-col gap-4 w-full" + className}
    >
      {status === "not_implemented" && (
        <Alert severity="error">No hay nada implementado aquí</Alert>
      )}
      {status === "mocked_data" && (
        <Alert severity="error">
          No muestra datos reales, estan puestos manualmente
        </Alert>
      )}
      {status === "in_progress" && (
        <Alert severity="warning">Esta sección esta en progreso</Alert>
      )}
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display="flex" flexDirection="column" gap="2">
          <Typography variant="title_large" component="div">
            {title}
          </Typography>
          {subtitle != "" && (
            <Typography
              variant="label_large"
              sx={{ color: "ap_text.default.secondary" }}
              component="div"
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        {hasAction && (
          <Button variant="contained" onClick={onActionClick}>
            {actionText}
          </Button>
        )}
      </Box>
      <ErrorBoundary FallbackComponent={SectionErrorFallback}>
        {/*TODO: Poner un fallback para errores que podrían ocurrir en esta seccion  */}
        {children}
      </ErrorBoundary>
    </Card>
  );
};
