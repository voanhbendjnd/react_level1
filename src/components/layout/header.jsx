// import './header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, message } from 'antd';
import { AliwangwangOutlined, BookOutlined, HomeOutlined, LoginOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { logoutAPI } from '../../services/api.service';

const Header = () => {
    const { user, setUser } = useContext(AuthContext);
    const [current, setCurrent] = useState('');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const navigate = useNavigate();
    const handleLogout = async () => {
        const res = await logoutAPI();
        if (res.data) {
            localStorage.removeItem("access_token")
            setUser({
                email: "",
                name: "",
                role: "",
                avatar: "",
                id: "",
                gender: "",
                address: "",
            })
            message.success("Logout successfully")
            navigate("/");
        }
    }
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <BookOutlined />,
        },
        ...(!user.id ? [
            {
                label: <Link to={"/login"}>Login</Link>,
                key: 'login',
                icon: <LoginOutlined />,
            }] : [{
                label: `Wellcome, ${user.name}`,
                key: 'SubMenu',
                icon: <AliwangwangOutlined />,
                children: [
                    {
                        type: 'group',
                        label: 'Setting',
                        children: [
                            {
                                label: <span onClick={() => handleLogout()}>Logout</span>
                            }
                        ],
                    }
                ],
            }]),
    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Header;