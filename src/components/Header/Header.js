import './Header.scss';
import React from 'react';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogo = () => {
        navigate("/");
    }

    const handleModal = () => {
        setIsOpen(oldState => !oldState);
    }

    return (
    <>
        
        <div className="header">
        
            <img onClick={handleLogo} className="logo" src={logo} alt='logo'/>
            <div className="header-links">
                <a className="header-link" href="/"><span className='header-green'>H</span>ome</a>
                <a className="header-link" href="/about"><span className='header-green'>A</span>bout</a>
                <a className="header-link" href="/skills"><span className='header-green'>S</span>kills</a>
                <a className="header-link" href="/formation"><span className='header-green'>F</span>ormations</a>
                <a className="header-link" href="/formation"><span className='header-green'>P</span>ortfolio</a>
                <a className="header-link" href="/contact"><span className='header-green'>C</span>ontact</a>
            </div>

            <div className="header-hamburger">
            
                <Hamburger
                    rounded
                    duration={0.6}
                    size={48}
                    distance="sm"
                    onToggle={handleModal}
                />
             
             </div>

             {
                 isOpen && 
                 <div className="header-links-mobile">
                    <a className="header-link-mobile" href="/">- <span className='header-green'>H</span>ome </a>
                    <a className="header-link-mobile" href="/about">- <span className='header-green'>A</span>bout</a>
                    <a className="header-link-mobile" href="/skills">- <span className='header-green'>S</span>kills</a>
                    <a className="header-link-mobile" href="/formation">- <span className='header-green'>F</span>ormations</a>
                    <a className="header-link-mobile" href="/formation">- <span className='header-green'>P</span>ortfolio</a>
                    <a className="header-link-mobile1" href="/contact">- <span className='header-green'>C</span>ontact</a>
                </div>
             }
        
        </div>
    </>
    )
};

export default Header;
