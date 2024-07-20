import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export const PropertyItem = ({ label, isRequired, input, sxLabel }) => {
  const theme = useTheme();
  return (
    <Stack spacing={1}>
      <Typography
        fontSize="12px"
        fontWeight={400}
        textAlign="left"
        lineHeight="18px"
        sx={sxLabel}
      >
        {label}{" "}
        {isRequired ? (
          <span style={{ color: theme.palette.error.main }}>*</span>
        ) : (
          ""
        )}
      </Typography>
      {input}
    </Stack>
  );
};
