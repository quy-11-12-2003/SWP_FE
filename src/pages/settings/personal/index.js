import { Container } from "@mui/material";
// components
import Page from "../../../components/Page";
import HeaderBreadcrumbs from "../../../components/HeaderBreadcrumbs";
//
import PersonalSetting from "../../../features/personal-setting";
// ----------------------------------------------------------------------

export default function PersonalSettingPage() {
  return (
    <Page title={"Thiết lập cá nhân"} sx={{ height: "100%" }}>
      <Container maxWidth={"lg"}>
        <HeaderBreadcrumbs
          heading={"Thiết lập cá nhân"}
          sx={{
            mt: 3,
          }}
        />
        <PersonalSetting />
      </Container>
    </Page>
  );
}
