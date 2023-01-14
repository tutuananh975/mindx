import { useContext, useState } from "react"
import { Form } from "react-bootstrap"
import { LoginContext } from "./Provider";

function Footer() {

    const {changeLanguage} = useContext(LoginContext);

    const [language, setLanguage] = useState('vi');

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value);
        changeLanguage();
    }

    return (
        <div className="footer position-fixed bottom-0 start-50">
            <Form.Select 
                className="w-100px" 
                value = {language}
                onChange = {(e) => handleChangeLanguage(e)}
            >
                <option value="vi">vi</option>
                <option value="en">en</option>
            </Form.Select>
        </div>
    )
}

export default Footer