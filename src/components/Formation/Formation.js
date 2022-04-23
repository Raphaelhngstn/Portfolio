import React from 'react';
import "./Formation.scss";
import oclock from '../../images/oclock.png';
import toeic from '../../images/toeic.png';
import Spinner from '../Spinner/Spinner';
import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';

const Formation = () => {
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1400);
    },[])

    return (
    spinner ? <Spinner/> :
    <div className='formation'>

        <p className='formation-subtitle javascript'>
            FORMATIONS
        </p> 

        <div className='formation-content'>

            <div className="formation-bloc">
                <img className='formation-oclock' src={oclock} alt="Panda"/>
                <p className='formation-title'>
                    French School Web Developement <br/>Sept-2021/March-2022
                </p>

                <p className='formation-detail'>
                <span className='formation-green'>L</span>evel 5 <span className='formation-green'>P</span>rofessional <span className='formation-green'>T</span>itle <span className='formation-green'>P</span>rogramming - IT <span className='formation-green'>D</span>eveloper 
                </p>
            </div>

            <div className="formation-bloc">
                <img className='formation-toeic' src={toeic} alt="Panda"/>
                <p className='formation-title'>
                Test of English <br/>for International<br/> Communication  2019
                </p>

                <p className='formation-detail'>
                <span className='formation-green'>T</span>OEIC - <span className='formation-green'>L</span>istening & <span className='formation-green'>R</span>eading - <span className='formation-green'>E</span>nglish - <span className='formation-green'>S</span>core 625 - <span className='formation-green'>L</span>evel B1 
                </p>
            </div>

        </div>

        {/* <div className='formation-content'>
            <CardFormation 
                image={oclock} 
                texte={" Student Web Developer JavaScript Full Stack "}
                date={"2022"}
                texte2={"Level 5 Professional Title Programming - IT Developer"}
            />
            <CardFormation 
                image={toeic}
                texte={"Test Of English For International Communication "}
                date={"2019"}
                texte2={"TOEIC - Listening & Reading - English - Score 625 -  Level B1"}
            />         
         </div> */}
        <Footer/>
    </div>
  )
}

export default Formation