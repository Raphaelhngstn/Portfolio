import './About.scss';
import React from 'react';
import profil from '../../images/profil.jpeg';
import videoG from '../../images/videoG.png';
import voyage from '../../images/voyage.png';
import panda from '../../images/panda.png';
import soleil from '../../images/soleil.png';

const About = () => {

    return (
    <div className="about">

        <div className='about-profil'>
        <img className='about-pic' src={profil} alt="Raphael"/>
        </div>
        <p className='about-subtitle'>
            <span className='blue'> &lt;h1&gt; </span>  About me !<span className='blue'> &lt;/h1&gt; </span>
        </p>
        <p className='about-content'>
        <span className='green'>P</span>assionate about computers, code and video games. <span className='green'>I</span> <span className='javascript'>decided to make it my job.</span> <br/>
        <span className='green'>A</span>nimals, sport and travel are part of my life. 
        </p>

        <p className='about-name'>
        <span className='green'>H</span>onigstein <span className='green'>R</span>aphael - <span className='green'>A</span>ge : 30 - <span className='green'>L</span>evel : Junior
        </p>
        
       

        <img className='about-videoG' alt='manette' src={videoG}/>
        <img className='about-voyage' alt='avion' src={voyage}/>
        <img className='about-panda' alt='panda' src={panda} />
        <img className='about-soleil' alt='soleil' src={soleil} />
        
        
    </div>

    )
};

export default About;