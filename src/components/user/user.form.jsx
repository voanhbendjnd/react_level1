import { Button, Input } from "antd";
import '../style.css'
import { useState } from "react";
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const handleClickBtn = () => {
        alert("Hi");
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
                <div>
                    <span>Phone</span>
                    <Input style={{ width: "80%" }} value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div>
                    <Button onClick={handleClickBtn} style={{ width: "7%" }} type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;