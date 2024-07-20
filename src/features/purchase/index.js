import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { MENU_TABS } from "./constants";
import { STATUS_ORDER } from "../../utils/constants";

const PurchaseContainer = () => {
  const [value, setValue] = React.useState(STATUS_ORDER.processing);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack pb={2} sx={{ minHeight: "calc(100vh - 66px)" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 1, md: 3 } }}>
        <Stack>
          <Typography fontSize="24px" fontWeight={400} lineHeight="36px" my={3}>
            Đơn mua
          </Typography>
          <Box sx={{ px: 1, }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons={false}
              aria-label="scrollable prevent tabs example"
            >
              {MENU_TABS.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
          </Box>
          <Box my={1.5} key={value}>
            {MENU_TABS.find((tab) => tab.value === value).component}
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default PurchaseContainer;
