import './Skills.scss';
import React from 'react';
import html5 from '../../images/html-5.png';
import css3 from '../../images/css-3.png';
import js from '../../images/js.png';
import node from '../../images/node.png';
import sass from '../../images/sass.png';
import react from '../../images/react.png';
import pgsql from '../../images/pgsql.png';
import redux from '../../images/redux.png';

const Skills = () => {

    return (
    <div className="skill">
        <p className='skill-subtitle'>
            <span className='blue'> &lt;h1&gt; </span> My Skills !<span className='blue'> &lt;/h1&gt; </span>
        </p>
        
        <img className='skill-html' src={html5} alt='logo html'/>
        <img className='skill-css' src={css3} alt='logo css'/>
        <img className='skill-js' src={js} alt='logo js'/>
        <img className='skill-node' src={node} alt='logo node'/>
        <img className='skill-sass' src={sass} alt='logo sass'/>
        <img className='skill-react' src={react} alt='logo react'/>
        <img className='skill-pgsql' src={pgsql} alt='logo pgsql'/>

        <img className='skill-redux' src={redux} alt='logo redux'/>
        
    </div>

    )
};

export default Skills;