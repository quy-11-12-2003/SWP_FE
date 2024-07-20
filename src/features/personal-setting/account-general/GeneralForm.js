import { Stack } from "@mui/material";
import { RHFTextField } from "../../../components/hook-form";
// ----------------------------------------------------------------------

export default function GeneralForm() {
  return (
    <Stack spacing={2.5} sx={{ maxWidth: { xs: 1, md: "70%" } }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <RHFTextField
          name="firstName"
          size="small"
          placeholder={"Ví dụ: Trinh"}
          label={"Tên"}
          required
        />
        <RHFTextField
          name="lastName"
          size="small"
          placeholder={"Ví dụ: Doan"}
          label={"Họ"}
          required
        />
      </Stack>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <RHFTextField
          name="phone"
          size="small"
          placeholder={"Ví dụ: 0904256789"}
          label={"Số điện thoại"}
          required
        />
        <RHFTextField
          name="email"
          size="small"
          InputProps={{ disabled: true }}
          label={"Địa chỉ email"}
        />
      </Stack>
      <RHFTextField
        name="address"
        size="small"
        required
        placeholder="Ví dụ: Bình Trị Đông A, Bình Tân, HCM"
        label={"Địa chỉ"}
      />
    </Stack>
  );
}
