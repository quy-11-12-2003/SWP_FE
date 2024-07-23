export const FEE_SHIP = 0;
// chuẩn bị sửa lại để cho wed đc free ship
export const MAX_PRICE_TRANSACTION = 1000000000;

export const phoneRegExp =
  /^(\d{10,11})|^(\d{2,4}[-]\d{2,4}[-]\d{2,4})|^((\d{2}|\d{3})[ |-]\d{4}[ |-]\d{4})$/;

export const emailRegExp =
  /^[a-zA-Z0-9.\-_]{1,}@[a-z0-9-_]{2,}(\.[a-z0-9]{2,4}){1,}$/;

export const FILTER_PRODUCT_ID = "filter-product-id";

export const STATUS_PAYMENT = {
  paid: "PAID",
  unpaid: "UNPAID",
  refunded: "REFUNDED",
  waitingRefund: "WAIT REFUNDED",
};

export const STATUS_ORDER = {
  processing: "PROCESSING",
  shipping: "DELIVERING",
  completed: "DELIVERED",
  canceled: "CANCEL",
  all: "ALL",
};
