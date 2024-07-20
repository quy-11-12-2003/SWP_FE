import React from "react";
import ProductListContainer from "../../features/products";
import Page from "../../components/Page";

const ProductsPage = () => {
  return (
    <Page title="Trang danh sách sản phẩm">
      <ProductListContainer />
    </Page>
  );
};

export default ProductsPage;
