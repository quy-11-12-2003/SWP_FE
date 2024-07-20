import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Stack } from "@mui/material";
import CartButton from "./cart/CartButton";
import AccountButton from "./AccountButton";
import Logo from "./Logo";
import FilterContextProvider from "../components/filters/FilterContextProvider";
import { FILTER_PRODUCT_ID } from "../utils/constants";
import { DEFAULT_PARAMS } from "./constants";
import useFilter from "../components/filters/useFilter";

export default function MainLayout() {
  const { uiId } = useFilter({
    fixedKey: FILTER_PRODUCT_ID,
    defaultValues: DEFAULT_PARAMS,
  });

  return (
    <FilterContextProvider uiId={uiId}>
      <Box sx={{ display: "flex", flex: 1 }}>
        <AppBar
          component="nav"
          sx={{
            background: (theme) => theme.palette.common.white,
            color: (theme) => theme.palette.primary.main,
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              pt: 2,
            }}
          >
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
            <Logo />
            <Stack direction='row' spacing={1}>
              <SearchBar />
              <Stack
              direction="row"
              spacing={0.5}
              alignContent="center"
              flexShrink={0}
              >
              <AccountButton />
              <CartButton />
              </Stack>
              </Stack>
              </Stack>
              </Toolbar>
              </AppBar>
              <Box component="main" sx={{ flex: 1 }}>
              <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </FilterContextProvider>
  );
}
