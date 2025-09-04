// import './header.css'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'antd';
import { AliwangwangOutlined, BookOutlined, HomeOutlined, LoginOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const { user } = useContext(AuthContext);
    const [current, setCurrent] = useState('');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
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
                                label: <Link to={"/login"}>Logout</Link>
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