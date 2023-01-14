import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalItem({ product, isShow, closeModal}) {

    return isShow && (
        <div
            className="modal show"
            style={{ display: 'block', position: 'fixed' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin sản phẩm</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center' 
                }}>
                    <div style={{  }}>
                        <div>{product.name}</div>
                        <div>Giá: {product.price}</div>
                    </div>
                    <img 
                        src={product.image} 
                        alt=''
                        style={{
                            width: '30%'
                        }}
                    >
                    </img>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={closeModal} variant="secondary">Hủy</Button>
                    <Button onClick={closeModal} variant="primary">Đặt hàng</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default ModalItem;