import { createContext, useState } from "react";
export const searchContext = createContext();

function ProviderSearch({children}) {
    const [searchValue, setSearchValue] = useState('')
    const changeSearchValue = (value) => {
        setSearchValue(value);
    }
    const value = {
        searchValue,
        changeSearchValue
    }

    return (
        <searchContext.Provider value={value}>{children}</searchContext.Provider>
    )
}

export default ProviderSearch;