import { Button, Col, Form, Input, notification, Row, Select } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";
import '../style/style.css'
const RegisterPage = () => {
    const [form] = Form.useForm();
    const vavigate = useNavigate();
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
            vavigate("/login")
        }
        else {
            notification.error({
                message: "Register user error!",
                description: JSON.stringify(res.message)
            })
        }
    }
    return (
        <>
            <Form
                form={form}
                layout="vertical"
                style={{ marginLeft: "30px", marginTop: "20px" }}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <Row className="row-register">
                    <Col xs={24} md={8}>  <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item></Col>
                </Row>
                <Row className="row-register">
                    <Col xs={24} md={8}>   <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item></Col>
                </Row>

                <Row className="row-register">
                    <Col xs={24} md={8}>       <Form.Item
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
                    <Col xs={24} md={8}> <Form.Item
                        label="Address"
                        name="address"
                    // rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item></Col>

                </Row>
                <Row className="row-register">
                    <Col xs={24} md={8}><Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item></Col>
                </Row>


                <Row className="row-register">
                    <Col xs={24} md={8}>  <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item></Col>
                </Row>


                <Row className="row-register" style={{ display: "flex" }}>
                    <Col xs={24} md={8}>
                        <Form.Item label="Gender" name="gender">
                            <Select
                                style={{ width: "38%", height: "40px" }}
                                options={[
                                    { value: 'MALE', label: 'MALE' },
                                    { value: 'FEMALE', label: 'FEMALE' },
                                    { value: 'OTHER', label: 'OTHER' },
                                ]}

                            />
                        </Form.Item>
                    </Col>
                </Row>




                <Row className="row-register">

                    <Col xs={24} md={8}>   <Form.Item label={null}>
                        <Button type="submit" onClick={() => form.submit()} style={{ backgroundColor: "aqua", textAlign: "center", color: "white", border: "none", borderRadius: "10px", padding: "10px" }}>Register</Button>
                        <Button type="submit" onClick={() => form.setFieldsValue({
                            email: "hangni@gmail.com",
                            fullName: "Hang Ni"
                        })} style={{ backgroundColor: "aqua", textAlign: "center", color: "white", border: "none", borderRadius: "10px", padding: "10px" }}>Render</Button>
                    </Form.Item></Col>



                </Row>



            </Form>
        </>
    )
}
export default RegisterPage