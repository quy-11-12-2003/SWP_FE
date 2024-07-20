import { useContext, useCallback, useState, useEffect } from "react";
import {
    setParam as setParamAction,
    setParams as setParamsAction,
    reset as resetAction, hasRegistered,
    setParamAsDefault as setParamAsDefaultAction,
    selectParams
} from "../../app/redux/filters/filterSlide";
import { useSelector, dispatch } from "../../app/store";
import { FilterContext } from "./FilterContextProvider";

export default function useFilterParams() {
    const { uiId } = useContext(FilterContext)
    const [shouldFilter, setShouldFilter] = useState(false)
    const available = useSelector(state => hasRegistered(state, uiId))
    const values = useSelector(state => selectParams(state, uiId));

    const setParam = useCallback((name, value) => {
        if (uiId) dispatch(setParamAction({ uiId, key: name, value: value ?? null }))
    }, [uiId])

    const setParams = useCallback((params) => {
        if (uiId) dispatch(setParamsAction({ uiId, params }))
    }, [uiId])

    const filter = () => {
        setShouldFilter(true);
    };

    useEffect(() => {
        if (shouldFilter) {
            const { defaultValues: _, ...params } = { ...values }
            // handleFilter(params)
            setShouldFilter(false)
        }
    }, [shouldFilter])

    const setParamAsDefault = useCallback((name, value) => {
        if (uiId) dispatch(setParamAsDefaultAction({ uiId, key: name, value }))
    }, [uiId])

    const reset = useCallback(() => {
        dispatch(resetAction({ uiId }))
    }, [uiId])

    return {
        available: available,
        setParam,
        setParams,
        setParamAsDefault,
        values,
        reset
    }
}
