import { useMemo } from "react";
import { Tab, Tabs } from "@mui/material";
//
import useTabs from "../../hooks/useTabs";
import Iconify from "../../components/Iconify";
//
import AccountGeneral from "./account-general";
import ChangePassword from "./change-password";

// ----------------------------------------------------------------------

const iconStyles = {
  width: 18,
  height: 18,
};
const getTabs = () => [
  {
    value: "general",
    label: "Tài khoản",
    icon: <Iconify icon="ic:round-account-box" sx={iconStyles} />,
    component: <AccountGeneral />,
  },
  {
    value: "change_password",
    label: "Thay đổi mật khẩu",
    icon: <Iconify icon="ic:round-vpn-key" sx={iconStyles} />,
    component: <ChangePassword />,
  },
];

export default function PersonalSettingContainer() {
  const tabs = useMemo(() => getTabs(), []);
  const { currentTab, onChangeTab } = useTabs(tabs[0].value);

  return (
    <>
      <Tabs sx={{ marginBottom: 3 }} value={currentTab} onChange={onChangeTab}>
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            icon={tab.icon}
            value={tab.value}
          />
        ))}
      </Tabs>
      {tabs.find((tab) => tab.value === currentTab)?.component}
    </>
  );
}
