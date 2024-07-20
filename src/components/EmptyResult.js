// @mui
import { Box } from "@mui/material";
// components
import EmptyContent from "./EmptyContent";

// ----------------------------------------------------------------------

const emptyStyles = {
  "& span.MuiBox-root": { mb: 0 },
  "& .MuiTypography-root": {
    fontSize: "0.875rem",
    fontWeight: 400,
  },
};

export function FixedEmptyResult({ isFixedContent, children, sx }) {
  if (isFixedContent)
    return (
      <Box sx={{ position: "fixed", width: "100vw", ...sx }}>{children}</Box>
    );

  return children;
}

export default function EmptyResult({
  fetchFailed,
  isNotFound,
  onDescClicked,
  emptyContent,
  sx,
  title,
  descTrans,
  ...props
}) {
  if (fetchFailed)
    return (
      <EmptyContent
        title={"Không thể truy xuất dữ liệu. Vui lòng thử lại."}
        img="/assets/illustrations/illustration_error_content.svg"
        imgProps={{ py: 0.75 }}
        {...props}
        sx={{ ...emptyStyles, ...sx }}
      />
    );

  // default is no data
  return (
    emptyContent ?? (
      <EmptyContent
        title={title || "Chưa có dữ liệu nào được tạo."}
        {...props}
        sx={{ ...emptyStyles, ...sx }}
      />
    )
  );
}
