import React from "react";
import { GroupBox } from "../../components/group-box/GroupBox";
import ProductItem from "./ProductItem";
import { Divider, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";

const ProductPreview = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const splitQuantityProduct = cartItems?.reduce((result, product) => {
    const quantity = product.quantity;
    const splitProducts = [];
    for (let index = 0; index < quantity; index += 1) {
      splitProducts.push({
        ...product,
        quantity: 1,
      });
    }

    return [...result, ...splitProducts];
  }, []);

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
