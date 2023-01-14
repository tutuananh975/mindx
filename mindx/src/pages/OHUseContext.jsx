import { Container } from "react-bootstrap";
import SearchBar from "../components/OHUseContext/SearchBar";
import ListProducts from "../components/OHUseContext/ListProducts";
import ProviderSearch from "../components/OHUseContext/ProviderSearch";

function OHUseContext() {

    return (
        <ProviderSearch>
            <Container className="py-5 d-flex flex-column">
                <SearchBar></SearchBar>
                <ListProducts></ListProducts>
            </Container>
        </ProviderSearch>
    )
}

export default OHUseContext;