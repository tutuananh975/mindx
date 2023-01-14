import { useEffect, useState } from "react";
import { products } from "./products";

function ListProducts({searchValue}) {
    const [productsSearch, setProductsSearch] = useState(products);

    useEffect(() => {
        setProductsSearch(() => {
            return products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()) || product.price.toString().includes(searchValue));
        })
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