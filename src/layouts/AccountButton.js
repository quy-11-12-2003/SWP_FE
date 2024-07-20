import { Menu, MenuItem, alpha } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useMemo, useState } from "react";
import { MENU_ITEM, menuAuthAccount, menuUnAuthAccount } from "./constants";
import { useNavigate } from "react-router-dom";
import { PATH_AUTH } from "../routes/paths";
import { dispatch } from "../app/store";
import {
  selectCurrentUser,
  selectIsAuthendicated,
  signOut,
} from "../app/redux/auth/authSlice";
import { enqueueSnackbar } from "notistack";
import { useSelector } from "react-redux";
import { IconButtonStyled } from "./cart/common";

const AccountButton = () => {
  const isAuthenticated = useSelector(selectIsAuthendicated);
  const currUser = useSelector(selectCurrentUser);
  const router = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    await dispatch(signOut());
    enqueueSnackbar("Đăng xuất thành công", { variant: "success" });
    router(PATH_AUTH.login);
  };

  const handleClickItem = async (item) => {
    const { value, url } = item ?? {};

    switch (value) {
      case MENU_ITEM.signIn:
      case MENU_ITEM.signUp:
      case MENU_ITEM.myAccount:
      case MENU_ITEM.purchaseOrder:
        router(url);
        break;
      case MENU_ITEM.logout:
        // Handle logout
        handleSignOut();
        break;
      default:
        break;
    }
    handleClose();
  };

  const menuItems = useMemo(
    () => (isAuthenticated ? menuAuthAccount : menuUnAuthAccount),
    [isAuthenticated]
  );

  const firstWordName = currUser?.firstName?.[0] || "";

  return (
    <>
      <IconButtonStyled
        size="small"
        disableRipple
        onClick={handleClick}
        sx={{
          ...(firstWordName && {
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.24),
            color: (theme) => theme.palette.grey[600],
            lineHeight: 1,
            p: 0,
            fontSize: "1.25rem",
          }),
        }}
      >
        {!!firstWordName ? firstWordName : <PersonOutlineIcon />}
      </IconButtonStyled>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} onClick={() => handleClickItem(menuItem)}>
            {menuItem.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AccountButton;
