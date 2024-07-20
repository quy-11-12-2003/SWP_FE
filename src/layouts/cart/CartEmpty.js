import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const CartEmpty = () => {
  return (
    <Box
      display="grid"
      sx={{
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          width: 250,
        }}
      >
        <img
          alt="empty"
          src="/assets/empty.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
      <Stack alignItems="center" px={3} mt={4} spacing={2}>
        <Typography variant="h5" textAlign="center">
          Giỏ của bạn trống trơn
        </Typography>
        <Typography variant="body1" textAlign="center">
          Có vẻ như bạn chưa thêm mặt hàng nào vào giỏ hàng!
        </Typography>
      </Stack>
    </Box>
  );
};
