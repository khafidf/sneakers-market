import Logo from './../assets/Logo.png'
import { MdShoppingCart } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const Navigation = () => {
    return (
        <div>
            <nav className="NavBar">
                <div className="Brand">
                    <a href="/"><img className="Logo" src={Logo} /></a>
                </div>
                <ul className="Nav">
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Brand</a></li>
                    <li><a href="/">Confirmation Order</a></li>
                    <a href="/"><MdShoppingCart className="Cart" /></a>
                    <a href="/"><FaUser className="User" /></a>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation