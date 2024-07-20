import React from "react";
import { Box, Container, Stack, Step, StepLabel, Stepper } from "@mui/material";
import Content from "./Content";

const CheckoutContainer = () => {
  return (
    <Stack mt={5}>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Content />
      </Container>
    </Stack>
  );
};

export default CheckoutContainer;
