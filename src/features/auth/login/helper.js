export const transformParams = (data) => {
  const { email, password } = data ?? {};

  const formData = new FormData();
  formData.append("Email", email);
  formData.append("Password", password);

  return formData;
};
