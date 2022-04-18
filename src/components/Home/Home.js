import './Home.scss';
import React, { useEffect } from 'react';
import raphael from '../../images/RaphaelSinge.webp';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import voyage from '../../images/voyage.png';

const Home = () => {
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1400);
    },[])

    return (
        spinner ? <Spinner/> :
        <div className="home">

            <div className="home-title">
                <img className='home-voyage' alt='avion' src={voyage}/>
                <p className='home-subtitle javascript'>
                    Hello World !
                </p>
            </div>
            

            <div className="home-content">

                <p className='home-text'>
                    Welcom<span className='green'>e</span>, <br/>
                    <span className='green'>I</span>'m <span className='green'>R</span>aphael Honigstei<span className='green'>n</span>,<br/>
                    <span className='green'>F</span>rench  <span className='green'>W</span>eb <span className='green'>D</span>eveloper, <br/>
                    <span className='green'>F</span>ull Stack <span className='javascript'> JavaScript</span> .
                </p>


                <div className='home-profil'>

                    <img className='home-pic' src={raphael} alt="Panda"/>
                </div>

                
            </div>
            
        </div>

    )
};

export default Home;
