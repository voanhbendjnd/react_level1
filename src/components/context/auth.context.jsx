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
// AuthContext: Đây là đối tượng Context mà bạn sẽ sử dụng để cung cấp và tiêu thụ dữ liệu.
// createContext({ ...}): Giá trị bên trong createContext là giá trị mặc định của Context.Nó chỉ được sử dụng khi một component tiêu thụ Context mà không được bọc trong một Provider.

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