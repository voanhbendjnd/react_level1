import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <ul>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link className='active' to="/users">Users</Link></li>
            <li><Link className='active' to="/products">Products</Link></li>
        </ul>
    )
}

export default Header;