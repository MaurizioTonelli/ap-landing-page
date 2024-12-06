import { ColorModeContext } from "@/config/colorModeContext";
import { Button, useTheme } from "@mui/material";
import { useContext } from "react";

export default function ThemeTogglerButton() {
  const colorMode = useContext(ColorModeContext);
  return <Button onClick={colorMode.toggleColorMode}>Cambiar tema</Button>;
}
