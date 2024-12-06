import { FormControlLabel, IconButton } from "@mui/material";
import { useController } from "react-hook-form";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export const TriStateCheckbox = ({
  label,
  name,
  control,
  defaultValue,
}: {
  label: string;
  name: string;
  control: any;
  defaultValue: boolean | null;
}) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const getNextState = (currentState: boolean | null): boolean | null => {
    return currentState === true ? false : currentState === false ? null : true;
  };

  const toggleState = () => {
    const nextState = getNextState(value);
    onChange(nextState); // Update react-hook-form state
  };

  return (
    <FormControlLabel
      control={
        <IconButton
          onClick={toggleState}
          style={{
            color: value === true ? "green" : value === false ? "red" : "gray",
          }}
        >
          {value === true ? (
            <CheckBoxIcon />
          ) : value === false ? (
            <CheckBoxOutlineBlankIcon />
          ) : (
            <IndeterminateCheckBoxIcon />
          )}
        </IconButton>
      }
      label={label}
    />
  );
};
