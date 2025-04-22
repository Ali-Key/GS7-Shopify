import React from 'react';

// Import react-router-dom components
import { Link, useLocation } from 'react-router-dom';

// Import icons from lucide-react
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <ShoppingCart size={24} />
          <span>GS7 Shopify</span>
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/shop"
              className={location.pathname === '/shop' ? 'active' : ''}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;