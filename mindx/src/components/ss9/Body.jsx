import FormLogin from "./FormLogin";
import { useContext } from "react";
import { LoginContext } from "./Provider";
import Welcome from "./Welcome";

function Body() {
    const {isLogin, changeIsLogin} = useContext(LoginContext);
    return (
        <div className="body d-flex">
            {
                isLogin ? <Welcome></Welcome> : <FormLogin></FormLogin>
            }
        </div>
    )
}

export default Body;