import React from "react";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { PropertyItem } from "./PropertyItem";
import RHFTextField from "../../components/hook-form/RHFTextField";

const ShippingInfo = () => {
  return (
    <Stack>
      <Typography
        variant="subtitle1"
        fontSize="20px"
        lineHeight="30px"
        fontWeight={400}
      >
        Thông tin giao hàng
      </Typography>
      <Grid container spacing={2.5}>
        <Grid item xs={12} sm={6}>
          <PropertyItem
            label="Họ"
            isRequired
            input={<RHFTextField name="lastName" fullWidth size="small" />}
            sxLabel={{
              textTransform: "uppercase",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PropertyItem
            label="Tên"
            isRequired
            input={<RHFTextField name="firstName" fullWidth size="small" />}
            sxLabel={{
              textTransform: "uppercase",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PropertyItem
            label="Số Điện Thoại"
            isRequired
            input={<RHFTextField name="phoneNumber" fullWidth size="small" />}
            sxLabel={{
              textTransform: "uppercase",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PropertyItem
            label="Mail"
            input={
              <RHFTextField name="email" type="email" fullWidth size="small" />
            }
            sxLabel={{
              textTransform: "uppercase",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <PropertyItem
            label="Địa chỉ"
            isRequired
            input={<RHFTextField name="address" fullWidth size="small" />}
            sxLabel={{
              textTransform: "uppercase",
            }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ShippingInfo;
