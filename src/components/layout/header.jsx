import './header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <ul className='menu-header'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
        </ul>
    )
}

export default Header;