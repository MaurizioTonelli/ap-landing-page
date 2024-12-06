import { useMemo, useState } from "react";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import getDesignTokens from "@/config/theme";
import { ColorModeContext } from "@/config/colorModeContext";
import { AppRoutes } from "@/routes";
import { AppProvider } from "@/providers/app";
import "dayjs/locale/es-mx";
import { Toaster } from "react-hot-toast";
import { esES } from "@mui/x-data-grid";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light",
        );
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode), esES), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <ColorModeContext.Provider value={colorMode}>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </ColorModeContext.Provider>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
