import { useState } from "react";
import { Container } from "react-bootstrap";
import ListProducts from "../components/OHUseState/ListProducts";
import SearchBar from "../components/OHUseState/SearchBar";


function OHUseState() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchValue = (value) => {
        setSearchValue(value)
    }
    
    return (
        <Container className="py-5 d-flex flex-column">
            <SearchBar onInput = {handleSearchValue}></SearchBar>
            <ListProducts searchValue = {searchValue}></ListProducts>
        </Container>
    )
}

export default OHUseState;