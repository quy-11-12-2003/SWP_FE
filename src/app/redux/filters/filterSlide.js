import { createSlice } from "@reduxjs/toolkit";
import { isArray, isEmpty } from "lodash";

const initialState = {
}

export const filterSlide = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        registerUi(state, action) {
            const { uiId, defaultValues } = action.payload;
            state[uiId] = {
                ...defaultValues ?? {},
                defaultValues: defaultValues ?? {}
            }
        },
        setParam(state, action) {
            const { uiId, key, value } = action.payload;
            if (!isEmpty(uiId) && !isEmpty(state?.[uiId])) {
                state[uiId][key] = value;
            }
        },
        setParams(state, action) {
            const { uiId, params } = action.payload;
            if (!isEmpty(uiId) && !isEmpty(state?.[uiId])) {
                state[uiId] = { ...state[uiId], ...params }
            }
        },
        reset(state, action) {
            const { uiId } = action.payload;
            const defaultValues = state[uiId]?.defaultValues ?? {};
            state[uiId] = { ...defaultValues, defaultValues: defaultValues }
        },
        setParamAsDefault(state, action) {
            const { uiId, key, value } = action.payload;
            if (!isEmpty(uiId) && !isEmpty(state?.[uiId])) {
                const defaultValues = state[uiId]?.defaultValues ?? {};
                defaultValues[key] = value;
                state[uiId] = { ...state[uiId], defaultValues, [key]: value }
            }
        },
        setParamsAsDefault(state, action) {
            const { uiId, params } = action.payload;
            if (!isEmpty(uiId) && !isEmpty(state?.[uiId])) {
                const defaultValues = state[uiId]?.defaultValues ?? {};
                const newDefaultValues = { ...defaultValues, ...params }
                state[uiId] = { ...state[uiId], defaultValues: newDefaultValues, ...params }
            }
        }
    }
})

// Selectors
const selectParamsByKey = (state, { uiId, key }) => {
    const params = state.filters[uiId];
    if (isEmpty(params)) return {};
    if (isEmpty(key)) return params; // all
    if (!isArray(key)) return { [key]: params?.[key] }
    return key.reduce((prevObj, k) => {
        return {
            ...prevObj,
            [k]: params[k]
        }
    }, {})
}
const selectParams = (state, uiId) => state.filters[uiId];
const hasRegistered = (state, uiId) => !isEmpty(state.filters?.[uiId]);
export {
    selectParamsByKey,
    selectParams,
    hasRegistered,
}
// Reducer
export default filterSlide.reducer;
// Actions
export const {
    setParams,
    setParam,
    registerUi,
    setParamsAsDefault,
    setParamAsDefault,
    reset,
} = filterSlide.actions;