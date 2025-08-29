import { Button, Input, notification } from "antd";
import '../style.css'
import { useState } from "react";
import axios from "axios";
import { createUserAPI } from "../../services/api.service";
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone, gender, confirmPassword, address);
        if (res.data && res.data) // check data is exists
        {
            notification.success({
                message: "Create User",
                description: "Create user successfully"
            })
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }
    return (
        <div className="user-form">
            <div>
                <div>
                    <span>Full Name</span>
                    <Input style={{ width: "80%" }}
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input style={{ width: "80%" }} value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className="user-form-password">
                    <span>Password</span>
                    <Input.Password style={{ width: "80%" }} value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div className="user-form-password">
                    <span>Confirm Password</span>
                    <Input.Password style={{ width: "80%" }} value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} />
                </div>
                <div>
                    <span>Address</span>
                    <Input style={{ width: "80%" }} value={address} onChange={(event) => { setAddress(event.target.value) }} />
                </div>
                <div>
                    <span>Phone</span>
                    <Input style={{ width: "80%" }} value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div>
                    <span>Gender</span>
                    <Input style={{ width: "80%" }} value={gender} onChange={(event) => { setGender(event.target.value) }} />
                </div>
                <div>
                    <Button onClick={handleClickBtn} style={{ width: "7%" }} type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;