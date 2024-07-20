// @mui
import { Box, Stack, Container, Typography } from "@mui/material";
// hooks
import useResponsive from "../../hooks/useResponsive";
// routes
// components
import Page from "../../components/Page";
import Image from "../../components/Image";
// sections
import { LoginContainer } from "../../features/auth/login";

import {
  RootStyle,
  HeaderStyle,
  SectionStyle,
  ContentStyle,
} from "./Login.styles";
import Logo from "../../layouts/Logo";
// ----------------------------------------------------------------------

export default function Login() {
  const mdUp = useResponsive("up", "md");

  return (
    <Page title="Đăng nhập">
      <RootStyle>
        <HeaderStyle>
          <Logo />
        </HeaderStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  Đăng nhập vào hệ thống
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Nhập thông tin chi tiết của bạn dưới đây.
                </Typography>
              </Box>
            </Stack>
            <LoginContainer />
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
