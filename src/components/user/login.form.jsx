import { useState } from "react";
import { Button, Input, message } from "antd"; // Import `message` để hiển thị thông báo
import '../style.css';
import axios from "axios";

const LoginForm = () => {
    // Sử dụng một đối tượng trạng thái duy nhất cho dữ liệu form
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClickBtn = async () => {
        // Cần thêm http:// hoặc https:// vào URL
        const URL_BACKEND = "http://localhost:8080/api/v1/auth/login";

        try {
            // Gửi yêu cầu POST đến backend
            const response = await axios.post(URL_BACKEND, formData);

            // Xử lý khi đăng nhập thành công
            if (response.status === 200) {
                message.success("Đăng nhập thành công!");

                // Lấy access token và refresh token từ phản hồi
                const accessToken = response.data.accessToken;
                const refreshToken = response.data.refreshToken;

                // Lưu access token vào Local Storage để sử dụng cho các yêu cầu sau
                localStorage.setItem("accessToken", accessToken);

                // Lưu ý: Refresh token thường được lưu trong cookies bảo mật hơn
                console.log("Access Token:", accessToken);
            }
        } catch (error) {
            // Xử lý khi đăng nhập thất bại
            console.error("Đăng nhập thất bại!", error);

            if (error.response && error.response.status === 401) {
                // Ví dụ: Lỗi khi sai tài khoản hoặc mật khẩu
                message.error("Tên đăng nhập hoặc mật khẩu không chính xác.");
            } else {
                // Xử lý các lỗi khác
                message.error("Đã xảy ra lỗi. Vui lòng thử lại sau.");
            }
        }
    };

    return (
        <div className="login-form">
            <div className="input-form">
                <div>
                    <span>Username</span>
                    <Input
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="user-form-password">
                    <span>Password</span>
                    <Input.Password
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Button onClick={handleClickBtn} type="primary">Login</Button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;