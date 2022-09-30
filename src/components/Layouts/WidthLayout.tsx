import { Box } from "@mui/material";
import React, { FC } from "react";

interface WidthProps {
  children: React.ReactNode;
  width?: number;
}

const WidthLayout: FC<WidthProps> = ({ children, width = 1200 }) => {
  return (
    <Box sx={{ maxWidth: width, width: "calc(100% - 16px)", mx: "auto" }}>
      {children}
    </Box>
  );
};

export default WidthLayout;
