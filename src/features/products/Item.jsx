import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { PATH_APP } from "../../routes/paths";
import { fCurrencyVND } from "../../utils/formatNumber";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/redux/cart/cartSlice";

const ProductItem = ({ data }) => {
  const { id, price,size } = data ?? {};
  const { name, image, milkBrand } = data?.product ?? {};
  
  const router = useNavigate();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  const handleViewDetails = () => {
    router(PATH_APP.products.viewDetail(id));
  };

  const imageUrl = image?.content
    ? "data:image/jpeg;base64," + image?.content
    : "";

  return (
    <Stack
      sx={{
        border: '1px solid #ccc',
        bgcolor: 'white',
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={handleViewDetails}
    >
      <Stack
        sx={{
          height: 150,
          width: 1,
          p: 1,
        }}
      >
        <img
          alt="product"
          src={imageUrl}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            objectPosition: "center",
          }}
        />
      </Stack>
      <Stack spacing={1} p={1}>
        <Typography
          fontSize={14}
          fontWeight={300}
          color="#9D9EA2"
          textAlign="center"
          noWrap
        >
          {milkBrand?.name}
        </Typography>
        <Typography
          fontSize={16}
          fontWeight={500}
          textAlign="center"
          noWrap
        >
          {name}
        </Typography>
        <Typography
          fontSize={14}
          fontWeight={300}
          color="#9D9EA2"
          textAlign="center"
          noWrap
        >
          {size}g
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={0.5}
        >
          <Typography fontSize="16px" fontWeight={600} color="#EB2606">
            {fCurrencyVND(price)}
          </Typography>
          <Button
            color="error"
            sx={{
              width: 27,
              height: 27,
              p: 0,
              minWidth: "auto",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductItem;
