import { Container } from "react-bootstrap"
import { useContext } from "react"
import { LoginContext } from "./Provider"

function Header() {
    const {isLogin, user, dictionary} = useContext(LoginContext);
    return (
        <div className="header bg-light py-2">
            <Container className="d-flex justify-content-between">
                <span className="fw-semibold fs-5">Mindx</span>
                {
                    isLogin 
                    ? <div className="welcome-user">{dictionary.welcomeHeader}   {user}</div>
                    : <div className="login-btn text-primary fs-5" role="button">{dictionary.login}</div>
                }
            </Container>
        </div>
    )
}

export default Header