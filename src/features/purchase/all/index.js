import { Stack, CircularProgress } from "@mui/material";
import React, { useMemo } from "react";
import { useGetAllOrdersQuery, useGetByStatusQuery } from "../../../app/services/order/orderApi";
import StateManager, { specifyState } from "../../../components/StateManager";
import EmptyResult from "../../../components/EmptyResult";
import ErrorAlert from "../../../components/ErrorAlert";
import GroupOrder from "../GroupOrder";
import { STATUS_ORDER } from "../../../utils/constants";

const All = () => {

    const responseAllOrders = useGetAllOrdersQuery(null, {
        refetchOnMountOrArgChange: true,
    });
    const { data } = responseAllOrders;
    const state = specifyState(responseAllOrders);

    const sortedItems = useMemo(() => {
        if (!data) return [];
        return structuredClone(data)?.sort(
            (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
    }, [data]);

    return (
        <StateManager
            state={state}
            loadingState={<Stack width={1} alignItems='center'>
                <CircularProgress />
            </Stack>}
            emptyState={<EmptyResult sx={{ backgroundColor: "background.paper" }} />}
            errorState={<ErrorAlert sx={{ backgroundColor: "background.paper" }} />}
        >
            <Stack spacing={1.5}>
                {sortedItems?.map((order, idx) => (
                    <GroupOrder key={idx} data={order} />
                ))}
            </Stack>
        </StateManager>
    );
};

export default All;
