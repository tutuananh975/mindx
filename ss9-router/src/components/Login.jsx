import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
    const navagate = useNavigate()
    const [acc, setAcc] = useState({username: '' , password: ''});
    const handleChangeInput = (e) => {
        setAcc(prev => {
            const key = e.target.name;
            const value = e.target.value;
            return {...prev, [key]: value};
        })
    }
    console.log(acc)
    const handleLogin = (e) => {
        e.preventDefault();
        if(acc.username && acc.password) {
            navagate('/')
        }
    }

    return (
        <div className="mt-5 w-25 bg-light p-4">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    value={acc.username} 
                    name = "username"
                    type="text" 
                    placeholder="Enter username" 
                    onChange={handleChangeInput}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={acc.password}
                    name = "password"
                    onChange={handleChangeInput}    
                />
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit"
                onClick={handleLogin}
            >
                Đăng nhập
            </Button>
        </Form>
        </div>
    )
}

export default Login;