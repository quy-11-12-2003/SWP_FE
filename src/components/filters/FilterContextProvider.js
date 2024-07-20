import { createContext } from "react"

export const FilterContext = createContext();

export default function FilterContextProvider({ uiId, ...props }) {
    const provideValue = {
        uiId: uiId,
    }
    return <FilterContext.Provider value={provideValue}>
        {props.children}
    </FilterContext.Provider>
}
