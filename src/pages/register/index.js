import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box, Link, Container, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
// routes
import { PATH_AUTH } from "../../routes/paths";
// components
import Page from "../../components/Page";
import Image from "../../components/Image";
// sections
import { RegisterContainer } from "../../features/auth/register";
import {
  RootStyle,
  HeaderStyle,
  SectionStyle,
  ContentStyle,
} from "./Register.styles";
import Logo from "../../layouts/Logo";
// ----------------------------------------------------------------------

export function Register() {
  const smUp = useResponsive("up", "sm");
  const mdUp = useResponsive("up", "md");

  return (
    <Page title={"Đăng ký"}>
      <RootStyle>
        <HeaderStyle>
          <Logo />
          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              Đã có tài khoản?{" "}
              <Link
                variant="subtitle2"
                component={RouterLink}
                to={PATH_AUTH.login}
              >
                Đăng nhập
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        <Container>
          <ContentStyle>
            <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h3" sx={{ color: "#1A73E8" }}>
                  Đăng ký
                </Typography>
              </Box>
            </Box>

            <RegisterContainer />

            {!smUp && (
              <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
                Đã có tài khoản?{" "}
                <Link
                  variant="subtitle2"
                  to={PATH_AUTH.login}
                  component={RouterLink}
                >
                  Đăng nhập
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}

export default Register;
