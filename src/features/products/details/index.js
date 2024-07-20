import React, { useMemo } from "react";
import DetailContainer from "./DetailContainer";
import { Container, CircularProgress, Stack, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../app/services/product-item/productItemApi";
import StateManager, { specifyState } from "../../../components/StateManager";
import ErrorAlert from "../../../components/ErrorAlert";
import EmptyResult from "../../../components/EmptyResult";
import { useGetProductsbyCompanyQuery } from "../../../app/services/company/companyApi";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const { id } = useParams();

  const responseProductDetails = useGetProductByIdQuery(id, { skip: !id });
  const { data: productDetails } = responseProductDetails;
  const companyId = productDetails?.product?.milkBrand?.company?.id;
  const responseProductsByCompany = useGetProductsbyCompanyQuery(companyId, { skip: !companyId });
  const { data: productsByCompany } = responseProductsByCompany;
  console.log(productsByCompany)

  const state = specifyState(responseProductDetails);

  const exceptCurrProduct = useMemo(() => productsByCompany?.filter(product => product?.id !== id) || [], [productsByCompany, id])

  return (
    <Container maxWidth={"false"} sx={{ py: 4 }}>
      <StateManager
        state={state}
        loadingState={<Stack width={1} alignItems='center'>
          <CircularProgress />
        </Stack>}
        emptyState={<EmptyResult />}
        errorState={<ErrorAlert />}
      >
        <DetailContainer data={productDetails} />
        <Typography variant="h6" sx={{ mt: 4 }}>
          Các sản phẩm cùng công ty
        </Typography>
        <Grid container spacing={2}>
          {exceptCurrProduct?.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </StateManager>
    </Container>
  );
};

export default ProductDetails;
