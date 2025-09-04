import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRoute = (props) => {
    const navigate = useNavigate();
    const handleOnClickLogin = () => {
        navigate("/login")
    }
    // nơi lưu thông tin người dùng
    const { user } = useContext(AuthContext);
    // nếu người dùng tồn tại thì sẽ trả ra
    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    }
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary" onClick={() => {
                handleOnClickLogin()
            }}>
                Login</Button>}
        />
    )
}

export default PrivateRoute;