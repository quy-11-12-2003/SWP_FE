import { Container, Stack } from "@mui/material";
import React from "react";
import ProductList from "./ProductList";
import ProductFilter from "./filter";
import Scrollbar from "../../components/Scrollbar";

const ProductListContainer = () => {
  return (
    <>
      <ProductFilter />
      <Stack pb={0} bgcolor="#F2F6F4">
        <Scrollbar style={{
          minHeight: `calc(100vh - 126px)`,
          maxHeight: `calc(100vh - 126px)`,
        }}>
          <Container maxWidth="xl" sx={{ pb: 2 }}>
            <ProductList />
          </Container>
        </Scrollbar>
      </Stack>
    </>
  );
};

export default ProductListContainer;
