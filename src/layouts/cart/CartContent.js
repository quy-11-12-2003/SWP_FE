import React from "react";
import Scrollbar from "../../components/Scrollbar";
import CartItem from "./CartItem";
import { FOOTER, HEADER } from "./constants";
import { useSelector } from "react-redux";
import { CartEmpty } from "./CartEmpty";

const CartContent = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const isEmpty = !cartItems?.length;

  return (
    <Scrollbar
      style={{
        minHeight: `calc(100vh - (${HEADER}px + ${FOOTER}px + 2px))`,
        maxHeight: `calc(100vh - (${HEADER}px + ${FOOTER}px + 2px))`,
      }}
    >
      {isEmpty && <CartEmpty />}
      {!isEmpty &&
        cartItems?.map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
    </Scrollbar>
  );
};

export default CartContent;
