import { useContext, useEffect, useState } from "react";
import { searchContext } from "./ProviderSearch";
import { products } from "../OHUseState/products";

function ListProducts() {
    const [productsSearch, setProductsSearch] = useState(products);
    const { searchValue } = useContext(searchContext);
    useEffect(() => {
        setProductsSearch(() => products.filter(product => {
            return product.name.toUpperCase().includes(searchValue.toUpperCase())
                || product.price.toString().includes(searchValue);
        }))
    }, [searchValue])
    return (
        <ul className="list-products mt-5">
            {
                productsSearch.map(product => (
                    <li key={product.id}>
                        <p>name: {product.name}</p>
                        <p>price: {product.price}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default ListProducts;