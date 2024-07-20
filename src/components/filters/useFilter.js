import { isEmpty } from "lodash";
import { useState, useEffect } from "react";
import { hasRegistered, registerUi, setParams } from "../../app/redux/filters/filterSlide";
import { useSelector, dispatch } from "../../app/store";

export default function useFilter({ fixedKey, defaultValues }) {
    const [registerId, setRegiterId] = useState(fixedKey)
    const hasExisted = useSelector(state => hasRegistered(state, registerId)) ?? false;
    useEffect(() => {
        setRegiterId(fixedKey)
    }, [fixedKey])

    useEffect(() => {
        if (!isEmpty(registerId) && !hasExisted) dispatch(registerUi({ uiId: registerId, defaultValues }))
    }, [registerId])

    const reset = (data) => {
        dispatch(setParams({ uiId: registerId, params: data }))
    }

    return {
        available: hasExisted,
        uiId: registerId,
        reset
    }
}
