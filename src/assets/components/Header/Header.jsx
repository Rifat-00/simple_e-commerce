import logo from '../../../assets/images/Logo.svg';
import './header.css';
const Header = () => {
  return (
    <div>
        <nav className='header'>
          <img className='logo' src={logo} alt="logo" />
          <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link">Shop</a></li>
            <li className="nav-item"><a href="/" className="nav-link">Order</a></li>
            <li className="nav-item"><a href="/" className="nav-link">Order Review</a></li>
            <li className="nav-item"><a href="/" className="nav-link">Manage Inventory</a></li>
            <li className="nav-item"><a href="/" className="nav-link">Login</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default Header
