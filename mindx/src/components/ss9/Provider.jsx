import { createContext, useState } from "react";
import { langugaDics } from "./languages";
export const LoginContext = createContext();

function Provider({children}) {

    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState('');
    const [language, setLanguage] = useState("vi");

    const changeIsLogin = (user) => {
        if (user.length > 0) {
            setIsLogin(!isLogin)
        }
    }

    const changeUser = (user) => {
        setUser(user);
    }

    const changeLanguage = () => {
        console.log('ok')
        setLanguage((prev) => prev === 'vi' ? 'en' : 'vi');
    }

    const value = {
        isLogin,
        changeIsLogin,
        user,
        changeUser,
        dictionary: langugaDics[language],
        changeLanguage
    }

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}

export default Provider;