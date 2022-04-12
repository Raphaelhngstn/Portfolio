import './Header.scss';
import React from 'react';
import logo from '../../images/logo.svg';

const Header = () => {

    

    return (
    <div className="header">
        <img className="logo" src={logo} alt='logo'/>
        <div className="header-links">
            <a className="header-link" href="/"><span className='green'>A</span>bout</a>
            <a className="header-link" href="/"><span className='green'>S</span>kills</a>
            <a className="header-link" href="/"><span className='green'>F</span>ormations</a>
            <a className="header-link" href="/"><span className='green'>P</span>ortfolio</a>
            <a className="header-link" href="/"><span className='green'>C</span>ontact</a>
        </div>
        
    </div>

    )
};

export default Header;
