import React from 'react';
import "./Formation.scss";
import oclock from '../../images/oclock.png';
import toeic from '../../images/toeic.png';
import CardFormation from '../CardFormation/CardFormation';
import Spinner from '../Spinner/Spinner';
import { useState, useEffect } from 'react';

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

        <p className='formation-subtitle'>
            FORMATIONS
        </p> 

        <div className='formation-content'>
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
         </div>
        
    </div>
  )
}

export default Formation