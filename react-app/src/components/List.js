import Product from "./Product";
import { Row } from "react-bootstrap";
import ModalItem from "./ModalItem";
import { useState } from "react";

function List({ products }) {
    const [productModal, setProductModal] = useState({});
    const [isShow, setIsShow] = useState(false);
    
    const handleShowModal = (product) => {
        setIsShow(true);
        setProductModal(product);
    }

    const handleCloseModal = () => {
        setIsShow(false)
    }

    return  (
        <Row className="product-list">

            {products.map(product => {
                return <Product onClick={() => handleShowModal(product)} key={product.id} product={product} />
                // return (<div key={product.id}>
                //     <Product product={product} />
                //     <ModalItem product = {product} display = {modal} ></ModalItem>
                // </div>
                // )
            })}
            <ModalItem closeModal={handleCloseModal} product={productModal} isShow = {isShow}></ModalItem>
        </Row>
    )
}

export default List;