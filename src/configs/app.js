// API
// ----------------------------------------------------------------------

export const HOST_API = process.env.REACT_APP_HOST_API_KEY || "";
export const VNPAY_TMN_CODE = process.env.REACT_APP_VNPAY_TMN_CODE;
export const VNPAY_SECRET_KEY = process.env.REACT_APP_VNPAY_SECRET_KEY;
export const VNPAY_VPN_URL = process.env.REACT_APP_VNPAY_VPN_URL;
export const VNPAY_RETURN_URL = process.env.REACT_APP_VNPAY_RETURN_URL;

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 80,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 220,
  // DASHBOARD_COLLAPSE_WIDTH: 88,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};
export const FORM = {
  FORM_MAX_WIDTH: "600px",
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

export const STACKBAR = {
  HIDE_DURATION: 3000,
  ANCHOR_VERTICAL: "top",
  ANCHOR_HORIZONTAL: "center",
};

// SETTINGS
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const defaultSettings = {
  themeMode: "light",
  themeDirection: "ltr",
  themeContrast: "default",
  themeLayout: "horizontal",
  themeColorPresets: "default",
  themeStretch: false,
};
export const applicationCard = {
  upHeight: "260px",
  downHeight: "150px",
};
