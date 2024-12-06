import { Box } from "@mui/material";
import { ReactNode } from "react";

export const ResponsiveTableWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Box sx={{ overflow: "auto" }}>
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        {children}
      </Box>
    </Box>
  );
};
