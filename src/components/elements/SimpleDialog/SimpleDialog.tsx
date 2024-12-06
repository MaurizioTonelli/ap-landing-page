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
import { ReactNode } from "react";

export const SimpleDialog = ({
  onClose,
  open,
  title,
  children,
}: {
  onClose: any;
  open: any;
  title: any;
  children: ReactNode;
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
};
