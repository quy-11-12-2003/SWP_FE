import { PATH_APP, PATH_AUTH } from "../routes/paths";

export const MENU_ITEM = {
  myAccount: "myAccount",
  purchaseOrder: "purchaseOrder",
  logout: "logout",
  signIn: "signIn",
  signUp: "signUp",
};

export const menuAuthAccount = [
  {
    id: 1,
    value: MENU_ITEM.myAccount,
    label: "Tài khoản của tôi",
    url: PATH_APP.profile.index,
  },
  {
    id: 2,
    value: MENU_ITEM.purchaseOrder,
    label: "Đơn mua",
    url: PATH_APP.purchase.index,
  },
  {
    id: 3,
    value: MENU_ITEM.logout,
    label: "Đăng xuất",
  },
];

export const menuUnAuthAccount = [
  {
    id: 1,
    value: MENU_ITEM.signIn,
    label: "Đăng nhập",
    url: PATH_AUTH.login,
  },
  {
    id: 2,
    value: MENU_ITEM.signUp,
    label: "Đăng ký",
    url: PATH_AUTH.register,
  },
];

export const FILTER_CONDITION = {
  page: "page",
  limit: "limit",
  name: "name",
  startPrice: "startPrice",
  endPrice: "endPrice",
  rangeAge: "rangeAge",
  milkBrandIds: "milkBrandIds",
};

export const DEFAULT_PARAMS = {
  page: 1,
  limit: 50,
  name: "",
  startPrice: null,
  endPrice: null,
  rangeAge: [0, 0],
  milkBrandIds: [],
};
