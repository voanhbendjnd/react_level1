import { Button, Input, notification, Select, Modal } from "antd";
import '../style.css'
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
const UserForm = (props) => {
    const { loadUser } = props;
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("MALE");
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone, gender, confirmPassword, address);
        if (res.data && res.data) // check data is exists
        {
            notification.success({
                message: "Create User",
                description: "Create user successfully"
            })
            resetAndCloseModal();
            await loadUser();
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setAddress("")
        setFullName("")
        setPassword("")
        setConfirmPassword("")
        setEmail("")
        setPhone("")
        setGender("MALE")
    }



    return (
        <div className="user-form">
            <div>
                <div style={{ padding: "20px", display: "flex", justifyContent: "flex-end" }}>
                    <Button onClick={() => { setIsModalOpen(true) }} style={{ width: "auto", height: "40px" }} type="primary">Create User</Button>
                </div>
                <Modal
                    title="Create User"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={() => handleSubmitBtn()}
                    onCancel={() => { resetAndCloseModal() }}
                    maskClosable={false} // không cho ấn tùm lum rồi thoát
                    okText={"CREATE"}
                    cancelText={"OUT"}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "10px" }}>
                        <div className="input-form-user">
                            <span>Full Name</span>
                            <Input style={{ width: "auto" }}
                                value={fullName}
                                onChange={(event) => { setFullName(event.target.value) }}
                            />
                        </div>
                        <div className="input-form-user">
                            <span>Email</span>
                            <Input style={{ width: "auto" }} value={email} onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div className="input-form-user">
                            <span>Password</span>
                            <Input.Password style={{ width: "auto" }} value={password} onChange={(event) => { setPassword(event.target.value) }} />
                        </div>
                        <div className="input-form-user">
                            <span>Confirm Password</span>
                            <Input.Password style={{ width: "auto" }} value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} />
                        </div>
                        <div className="input-form-user">
                            <span>Address</span>
                            <Input style={{ width: "auto" }} value={address} onChange={(event) => { setAddress(event.target.value) }} />
                        </div>
                        <div className="input-form-user">
                            <span>Phone</span>
                            <Input style={{ width: "auto" }} value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                        </div>
                        <div className="input-form-user">
                            <span>Gender</span>
                            <Select
                                value={gender}
                                style={{ width: "20%", height: "40px" }}
                                onChange={(value) => setGender(value)}
                                options={[
                                    { value: 'MALE', label: 'MALE' },
                                    { value: 'FEMALE', label: 'FEMALE' },
                                    { value: 'OTHER', label: 'OTHER' },
                                ]}

                            />
                        </div>
                    </div>
                </Modal>

            </div>
        </div>
    )
}
export default UserForm;