import { useState } from "react";
import { Container, Navbar, Nav, Modal, Button } from "react-bootstrap";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(() => {
        if (localStorage.idUser) return true;
        return false
    });

    const [showModal, setShowModal] = useState(false)

    console.log(isLogin);

    const openModal = () => {
        setShowModal(true);
    }

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/auth" style={{ textDecoration: 'none' }}>Đăng nhập</NavLink>
                    </Navbar.Brand>
                    <Nav>

                        <NavLink 
                            to={isLogin ? "products" : ""} 
                            className="me-3" 
                            onClick={openModal}
                        >
                            Products
                        </NavLink>
                        <NavLink 
                            to={isLogin ? "invoices" : ""} 
                            className="me-3" 
                            onClick={openModal}
                        >
                            Invoices
                        </NavLink>
                        <NavLink 
                            to={isLogin ? "cart" : ""} 
                            className="me-3" 
                            onClick={openModal}
                        >
                            Cart
                        </NavLink>
                        <NavLink 
                            to={isLogin ? "profile" : ""} 
                            className="me-3" 
                            onClick={openModal}
                        >
                            Profile
                        </NavLink>
                        <NavLink 
                            to={isLogin ? "about" : ""} 
                            className="me-3" 
                            onClick={openModal}
                        >
                            About
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
            {showModal &&
                <div className="position-fixed top-0 bottom-0 start-0 end-0" style={{backgroundColor: "rgba(0, 0, 0, .2)"}}>
                    <div
                        className="modal show mt-5"
                        style={{ display: 'block', position: 'fixed' }}
                    >
                        <Modal.Dialog>
                            <Modal.Header closeButton onHide={() => setShowModal(false)}>
                                <Modal.Title>Xin mời đăng nhập</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>Bạn phải đăng nhập để thực hiện chức năng này</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowModal(false)}>Thoát!</Button>
                                <Button variant="primary" onClick={() => navigate("/auth")}>Đăng nhập ngay</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                </div>
            }
            <Outlet />
        </>

    )
}

export default Header;