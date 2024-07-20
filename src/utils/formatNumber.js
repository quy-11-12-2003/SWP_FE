export function fCurrencyVND(amount) {
  // Chuyển đổi số tiền thành chuỗi với 0 chữ số thập phân
  const fixedAmount = amount.toFixed(0);

  // Sử dụng regex để thêm dấu phân tách hàng nghìn
  const formattedAmount = fixedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Thêm ký hiệu tiền tệ "₫" vào trước chuỗi
  return `₫${formattedAmount}`;
}

export function fThousandSeparator(number, nullValue = 0) {
  if (!number) return nullValue;

  const thousands = /\B(?=(\d{3})+(?!\d))/g;

  const parts = number.toString().split(".");

  const numberPart = parts[0].replace(thousands, ",");
  const decimalPart = parts[1] ? `.${parts[1]}` : "";

  return numberPart + decimalPart;
}
