import { useContext } from "react";
import { searchContext } from "./ProviderSearch";


function SearchBar() {
    const {changeSearchValue} = useContext(searchContext);
 
    return (
        <input 
            placeholder="Search" 
            onChange={(e) => changeSearchValue(e.target.value)}
        />
    )
}

export default SearchBar;