import './Home.scss';
import React from 'react';
import raphael from '../../images/RaphaelSinge.webp';

const Home = () => {

    return (
    <div className="home">
        <p className='home-subtitle'>
            <span className='blue'> &lt;h1&gt; </span>  Hello World !<span className='blue'> &lt;/h1&gt; </span>
        </p>
        <p className='home-content'>
            Welcom<span className='green'>e</span>, <br/>
            <span className='green'>I</span>'m <span className='green'>R</span>aphael Honigstei<span className='green'>n</span>,<br/>
            <span className='green'>F</span>rench  <span className='green'>W</span>eb <span className='green'>D</span>eveloper, <br/>
            <span className='green'>F</span>ull Stack JavaScript .
        </p>

        <div className='home-profil'>
            <img className='home-pic' src={raphael} alt="Raphael"/>
        </div>
        
    </div>

    )
};

export default Home;
