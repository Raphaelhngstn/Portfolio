import './CardFormation.scss';

const CardFormation = ({image, texte, texte2, date}) => {

    return (
    <div className='card-formation'>
        <div className='card-formation-image'>
            <img className='card-formation-logo' src={image}/>
        </div>
        
        <p className='card-formation-texte javascript'>         
        {texte}
            <span className='card-formation-date'>{date}</span>
        </p>
        
        <p className='card-formation-texte2'>
        {texte2}
        </p>
    </div>

    )
};

export default CardFormation;