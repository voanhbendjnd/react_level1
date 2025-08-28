import { Button, Input } from "antd";
import '../style.css'
const UserForm = () => {
    return (
        <div className="user-form">
            <div>
                <div>
                    <span>Full Name</span>
                    <Input style={{ width: "80%" }} />
                </div>
                <div>
                    <span>Email</span>
                    <Input style={{ width: "80%" }} />
                </div>
                <div className="user-form-password">
                    <span>Password</span>
                    <Input.Password style={{ width: "80%" }} />
                </div>
                <div>
                    <span>Phone</span>
                    <Input style={{ width: "80%" }} />
                </div>
                <div>
                    <Button style={{ width: "7%" }} type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;