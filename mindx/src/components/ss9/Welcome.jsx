import { useContext } from "react"
import { LoginContext } from "./Provider"
function Welcome() {

    const {dictionary} = useContext(LoginContext)

    return (
        <div className="welcome-body m-auto fs-4 fw-bold mt-5">
            {dictionary.welcomeBody}
        </div>
    )
}

export default Welcome