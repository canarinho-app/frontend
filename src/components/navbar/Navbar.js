import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <aside class="menu-area">
            <nav className="menu">
                <Link to="/">Home</Link>
                <Link to="/notifications">Notifications</Link>
            </nav>
        </aside>

    );
}

export default Navbar;