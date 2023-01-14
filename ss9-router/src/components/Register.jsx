import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        navigate("/auth")
    }

    return (
        <div className="mt-5 w-25 bg-light p-4">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
            <Button 
                variant="primary" 
                onClick={handleRegister}
                type="submit"
            >
                Đăng ký
            </Button>
        </Form>
        </div>
    )
}

export default Register;