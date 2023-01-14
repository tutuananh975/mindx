
import { Col } from "react-bootstrap";

function Product({product, onClick}) {

    return (
        <Col md={2} sm={4} xs={6} className = "product-item">
            <img src={product.image} alt='' onClick={onClick}></img>
            <p>{product.name}</p>
        </Col>
    )
}
export default Product;