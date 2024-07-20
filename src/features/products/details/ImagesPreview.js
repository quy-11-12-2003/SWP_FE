import { Stack, Box } from "@mui/material";
import { alpha } from "@mui/material";

const ImagesPreview = ({ image }) => {
  const imageUrl = image ? "data:image/jpeg;base64," + image : "";

  return (
    <Stack
      direction={"row"}
      minHeight={400}
      width={1}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        sx={{
          width: 300,
          height: 300,
          borderRadius: 1,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <img alt={"product image"} src={imageUrl} style={{
          objectFit: "contain",
          width: "100%",
          height: "100%",
        }} />
      </Box>
    </Stack>
  );
};

export default ImagesPreview;
