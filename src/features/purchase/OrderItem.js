import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { fCurrencyVND, fThousandSeparator } from "../../utils/formatNumber";

const OrderItem = ({ data }) => {
  const { quantity, price, productItem } = data ?? {};
  const { name, image, milkBrand } = productItem?.product ?? {};

  const imageUrl = image?.content
    ? "data:image/jpeg;base64," + image?.content
    : "";

  return (
    <Box
      p={1}
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "48px",
          height: "48px",
          mr: 2,
        }}
      >
        <img
          alt="product"
          src={imageUrl}
          style={{
            width: '100%',
            height: '100%',
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box flex={1}>
        <Typography
          fontSize={"1rem"}
          fontWeight={500}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {name}
        </Typography>
        <Stack>
          <Typography fontSize={14} fontWeight={300} color="#9D9EA2">
            {milkBrand?.name}
          </Typography>
          <Typography
            fontSize={14}
            fontWeight={300}
            color="rgba(0, 0, 0, 0.87)"
          >
            x{fThousandSeparator(quantity || 0)}
          </Typography>
        </Stack>
      </Box>
      <Stack alignSelf="flex-start">
        <Box alignSelf="center" mt={2}>
          <Typography fontSize="14px" fontWeight={500} color="#EB2606">
            {fCurrencyVND(price)}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default OrderItem;
