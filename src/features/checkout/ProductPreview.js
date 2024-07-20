import React from "react";
import { GroupBox } from "../../components/group-box/GroupBox";
import ProductItem from "./ProductItem";
import { Divider, Typography, Stack } from "@mui/material";
import ProductTotal from "./ProductTotal";
import { useSelector } from "react-redux";

const ProductPreview = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Stack>
      <Typography
        variant="subtitle1"
        fontSize="20px"
        lineHeight="30px"
        fontWeight={400}
      >
        Sản phẩm
      </Typography>
      {cartItems?.map((product, idx) => (
        <ProductItem key={idx} data={product} />
      ))}
    </Stack>
  );
};

export default ProductPreview;
