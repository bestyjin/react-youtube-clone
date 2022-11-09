import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/videos'>videos</Link>
        </nav>
    );
}

export default Navbar;