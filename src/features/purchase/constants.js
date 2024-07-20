import { STATUS_ORDER } from "../../utils/constants";
import Canceled from "./canceled";
import Completed from "./completed";
import Shipping from "./shipping";
import WaitingShip from "./waitingShip";

export const MENU_TABS = [
    {
        label: "Đang xử lý",
        value: STATUS_ORDER.processing,
        component: <WaitingShip />,
    },
    {
        label: "Đang vận chuyển",
        value: STATUS_ORDER.shipping,
        component: <Shipping />,
    },
    { label: "Hoàn thành", value: STATUS_ORDER.completed, component: <Completed /> },
    { label: "Đã hủy", value: STATUS_ORDER.canceled, component: <Canceled /> },
];
