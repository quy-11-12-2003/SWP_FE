import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";
import CartContainer from "./CartContainer";
import { IconButtonStyled } from "./common";

const CartButton = () => {
  const { toggle: open, onToggle, onClose } = useToggle();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <IconButtonStyled
        size="small"
        onClick={onToggle}
        sx={{
          flex: 1,
          flexShrink: 0,
        }}
      >
        <Badge badgeContent={cartItems?.length || 0} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButtonStyled>
      <CartContainer open={open} onClose={onClose} />
    </>
  );
};

export default CartButton;
