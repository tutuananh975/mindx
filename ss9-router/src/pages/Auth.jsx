import { Container } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";

function Auth() {


    return (
        <Container className="py-4">
            <NavLink to="">Đăng nhập</NavLink>
            <NavLink to="register" className="ms-3">Đăng ký</NavLink>
            <Outlet></Outlet>
        </Container>
    )
}

export default Auth;