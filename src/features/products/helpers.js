export const transformParams = (data) => {
  const { name, page, limit, startPrice, endPrice, rangeAge, milkBrandIds } =
    data ?? {};
  const formData = new FormData();
  formData.append("PageNumber", page);
  formData.append("PageSize", limit);

  if (name) formData.append("Name", name);
  if (rangeAge?.[1]) {
    formData.append("StartAge", rangeAge?.[0]);
    formData.append("EndAge", rangeAge?.[1]);
  }
  if (startPrice) formData.append("StartPrice", startPrice);
  if (endPrice) formData.append("EndPrice", endPrice);
  if (milkBrandIds?.length > 0) {
    milkBrandIds?.forEach((milBrandId) =>
      formData.append("MilkBrandIds", milBrandId)
    );
  }

  return formData;
};

export function isFormDataEmpty(formData) {
  for (let pair of formData.entries()) {
    // If at least one entry exists, return false
    return false;
  }
  // If no entries exist, return true
  return true;
}
