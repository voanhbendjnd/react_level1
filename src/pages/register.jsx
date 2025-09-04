import { Button, Col, Divider, Form, Input, notification, Row, Select } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";
import '../style/style.css'
const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log("data:", values)

        const res = await registerUserAPI(
            values.email,
            values.fullName,
            values.phone,
            values.address,
            values.password,
            values.confirmPassword,
            values.gender
        )
        if (res.data) {
            notification.success({
                message: "Register user",
                description: "Register successfull"
            })
            navigate("/login")
        }
        else {
            notification.error({
                message: "Register user error!",
                description: JSON.stringify(res.message)
            })
        }
    }
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Col
                xs={22} // 91.6% (gần 90%) trên màn hình điện thoại (<576px)
                sm={18} // 75% trên màn hình nhỏ (>=576px)
                md={12} // 50% trên màn hình vừa (>=768px)
                lg={10} // ~41.6% (gần 40%) trên màn hình lớn (>=992px)
            >
                <Form
                    form={form}
                    layout="vertical"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "center",
                        marginTop: "20px",
                        padding: "10px",
                        border: "1px solid gray",
                        width: "100%"
                    }}
                    onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                >
                    <h1 style={{ marginBottom: "10px" }}>Register</h1>


                    <Row className="row-register">
                        <Col span={24}>  <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item></Col>
                    </Row>
                    <Row className="row-register">
                        <Col span={24}>   <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item></Col>
                    </Row>

                    <Row className="row-register">
                        <Col span={24}>       <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[{
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Wrong format!"
                            }]}
                        >
                            <Input />
                        </Form.Item></Col>
                    </Row>

                    <Row className="row-register">
                        <Col span={24}> <Form.Item
                            label="Address"
                            name="address"
                        // rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item></Col>

                    </Row>
                    <Row className="row-register">
                        <Col span={24}><Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item></Col>
                    </Row>


                    <Row className="row-register">
                        <Col span={24}>  <Form.Item
                            label="Confirm Password"
                            name="confirmPassword"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item></Col>
                    </Row>


                    <Row className="row-register" style={{}}>
                        <Col span={24}>
                            <Form.Item label="Gender" name="gender">
                                <Select
                                    style={{ width: "30%", height: "35px" }}
                                    options={[
                                        { value: 'MALE', label: 'MALE' },
                                        { value: 'FEMALE', label: 'FEMALE' },
                                        { value: 'OTHER', label: 'OTHER' },
                                    ]}

                                />
                            </Form.Item>
                        </Col>

                    </Row>

                    <Divider />


                    <Row className="row-register" >


                        <Col xs={12} md={5}>   <Form.Item style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>

                            <Button type="submit" onClick={() => form.submit()}
                                style={{
                                    backgroundColor: "aqua",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "10px",
                                    padding: "10px",
                                }}>Register</Button>
                            {/* <Button type="submit" onClick={() => form.setFieldsValue({
                            email: "hangni@gmail.com",
                            fullName: "Hang Ni"
                        })} style={{ backgroundColor: "aqua", textAlign: "center", color: "white", border: "none", borderRadius: "10px", padding: "10px" }}>Render</Button> */}
                        </Form.Item></Col>


                    </Row>



                </Form>
            </Col>

        </div>

    )
}
export default RegisterPage