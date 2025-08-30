import { Button, Input, notification, Select } from "antd";
import '../style.css'
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("MALE");


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
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "10px" }}>
                <div className="input-form-user">
                    <span>Full Name</span>
                    <Input style={{ width: "80%" }}
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div className="input-form-user">
                    <span>Email</span>
                    <Input style={{ width: "80%" }} value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className="input-form-user">
                    <span>Password</span>
                    <Input.Password style={{ width: "80%" }} value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div className="input-form-user">
                    <span>Confirm Password</span>
                    <Input.Password style={{ width: "80%" }} value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} />
                </div>
                <div className="input-form-user">
                    <span>Address</span>
                    <Input style={{ width: "80%" }} value={address} onChange={(event) => { setAddress(event.target.value) }} />
                </div>
                <div className="input-form-user">
                    <span>Phone</span>
                    <Input style={{ width: "80%" }} value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div className="input-form-user">
                    <span>Gender</span>
                    <Select
                        value={gender}
                        style={{ width: "7%", height: "40px" }}
                        onChange={(value) => setGender(value)}
                        options={[
                            { value: 'MALE', label: 'MALE' },
                            { value: 'FEMALE', label: 'FEMALE' },
                            { value: 'OTHER', label: 'OTHER' },
                        ]}

                    />
                </div>
                <div>
                    <Button onClick={handleClickBtn} style={{ width: "5%", height: "40px" }} type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;