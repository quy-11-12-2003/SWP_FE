import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { fCurrencyVND, fThousandSeparator } from "../../utils/formatNumber";

const ProductItem = ({ data }) => {
  const { product, name, price, quantity } = data ?? {};
  const { image } = product ?? {};

  const imageUrl = image?.content
    ? "data:image/jpeg;base64," + image.content
    : "";
  return (
    <Stack>
      <Grid container sx={{ my: 3 }}>
        <Grid item xs={12} md={5}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: 0.75,
                border: `1px solid #F4F4F4`,
                py: 0.5,
                px: 0.75,
              }}
            >
              <img
                alt="product"
                src={imageUrl}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              fontSize="14px"
              color="#9D9EA2"
              lineHeight="21px"
              fontWeight={400}
            >
              {name}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={3.5} sx={{ placeContent: "center" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1.5}
          >
            <Typography variant="body2" color="#9D9EA2" fontWeight={300}>
              {fThousandSeparator(quantity)}x
            </Typography>
            <Typography variant="subtitle2" fontWeight={400} color="#060709">
              {fCurrencyVND(price)}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={3.5} sx={{ placeContent: "center" }}>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            color="#060709"
            textAlign="right"
          >
            {fCurrencyVND(quantity * price)}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </Stack>
  );
};

export default ProductItem;
