import './Header.scss';
import React from 'react';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleLogo = () => {
        navigate("/");
    }

    return (
    <div className="header">
        <img onClick={handleLogo} className="logo" src={logo} alt='logo'/>
        <div className="header-links">
            <a className="header-link" href="/about"><span className='green'>A</span>bout</a>
            <a className="header-link" href="/skills"><span className='green'>S</span>kills</a>
            <a className="header-link" href="/formation"><span className='green'>F</span>ormations</a>
            <a className="header-link" href="/formation"><span className='green'>P</span>ortfolio</a>
            <a className="header-link" href="/contact"><span className='green'>C</span>ontact</a>
        </div>
        
    </div>

    )
};

export default Header;
