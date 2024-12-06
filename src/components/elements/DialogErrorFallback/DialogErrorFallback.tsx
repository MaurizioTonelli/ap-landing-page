import {
  Alert,
  AlertTitle,
  Dialog,
  DialogTitle,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { AppButton } from "../AppButton";

export const DialogErrorFallback = (props: any) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="p-8">
        <DialogTitle>Error</DialogTitle>
        <Alert severity="error">
          <AlertTitle>Error de conexión</AlertTitle>
          Ocurrió un error al cargar esta sección, revisa tu conexión e
          inténtalo de nuevo.
        </Alert>
      </div>
    </Dialog>
  );
};
