import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Sitemap</h1>
            <ul>
                <li><Link to="/en">Home</Link></li>
                <li><Link to="/en/AboutUs">About Us</Link></li>
                <li><Link to="/en/Services">Services</Link></li>
                <li><Link to="/en/Products">Products</Link></li>
                <li><Link to="/en/Portfolio">Portfolio</Link></li>
                <li><Link to="/en/Blogs">Blogs</Link></li>
                <li><Link to="/en/Careers">Careers</Link></li>
            </ul>
        </div>
    );
};
export default Sitemap;
