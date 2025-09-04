import { Button, Col, Divider, Form, Input, message, notification, Row, Select } from "antd";
import '../style/style.css'
import { Link, useNavigate } from "react-router-dom";
import { loginAPi } from "../services/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
    const [form] = Form.useForm();
    const [loadLogin, setLoadLogin] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const onFinish = async (values) => {
        setLoadLogin(true)
        const res = await loginAPi(values.email, values.password);
        if (res.data) {
            message.success("Login successfull")
            localStorage.setItem("access_token", res.data.access_token);
            setUser(res.data.user)
            navigate("/")
        }
        else {
            notification.error({
                message: "Error  Login",
                description: JSON.stringify(res.message)
            })
        }
        setLoadLogin(false)
        console.log(">>> Values:", values)
    }
    return (
        <Row style={{ display: "flex", justifyContent: "center", width: "100%", position: "fixed", top: "5%" }}>
            {/* Sử dụng Col để điều khiển độ rộng của form dựa trên kích thước màn hình */}
            <Col
                xs={22} // 91.6% (gần 90%) trên màn hình điện thoại (<576px)
                sm={18} // 75% trên màn hình nhỏ (>=576px)
                md={12} // 50% trên màn hình vừa (>=768px)
                lg={10} // ~41.6% (gần 40%) trên màn hình lớn (>=992px)
            >
                <fieldset
                    style={{
                        padding: "15px",
                        margin: "5px",
                        border: "1px solid #ccc",
                        borderRadius: "5px"
                    }}>
                    <legend>Login</legend>
                    <Form
                        className="form-login"
                        form={form}
                        layout="vertical"
                        // style={{
                        //     padding: "10px",
                        //     marginTop: "20px",
                        //     border: "1px solid gray",
                        //     width: "100%", // Form sẽ lấp đầy 100% của Col cha
                        // }}
                        onFinish={onFinish}
                    >

                        {/* <h1 style={{ marginBottom: "10px" }}>Login</h1> */}

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: "email", message: "The input is not a valid E-mail!" },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password onKeyDown={(event) => {
                                if (event.key === "Enter")
                                    form.submit()
                            }} />
                        </Form.Item>

                        <Form.Item >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Button
                                    loading={loadLogin}
                                    type="primary" htmlType="submit">Login</Button>
                                <Link to={"/"}>Go to homepage</Link>
                            </div>


                        </Form.Item>

                    </Form>
                    <Divider />
                    You do not have an account, go back to the
                    <Link to={"/register"}> register page</Link>

                </fieldset>

            </Col>
        </Row>
    );
};

export default LoginPage;