import { createContext, useState } from "react";

export const AuthContext = createContext({
    email: "",
    name: "",
    role: "",
    avatar: "",
    id: "",
    gender: "",
    address: "",
})


export const AuthWrapper = (props) => {
    const [isAppLoading, setIsAppLoading] = useState(true);

    const [user, setUser] = useState({
        email: "",
        name: "",
        role: "",
        avatar: "",
        id: "",
        gender: "",
        address: "",
    })
    return (
        <AuthContext.Provider value={{ isAppLoading, setIsAppLoading, user, setUser }}>
            {props.children}
        </AuthContext.Provider >
    )
}