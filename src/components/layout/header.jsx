import './header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <ul className='menu-header'>
            <div>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/books">Books</NavLink></li>
            </div>
            <div>
                <li><NavLink to="/login">Login</NavLink></li>

            </div>

        </ul>
    )
}

export default Header;