import { TextField } from "@mui/material";
import clsx from "clsx";
import { UseFormRegisterReturn } from "react-hook-form";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password";
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const { type = "text", label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <TextField
        variant="outlined"
        type={type}
        className={clsx(" w-full border sm:text-sm", className)}
        {...registration}
      />
    </FieldWrapper>
  );
};
