import './SingleCard.css';

export default function SingleCard({card, handleChoice, flipped, disabled}) {

const handleClick = () => {
    if (!disabled) {
        handleChoice(card)
    } 
    
}

    // return ( 
    // <div className='card'>
    //     <div>
    //     <img className='front' src={card.src} alt="card front"/>
    //     <img 
    //     className='back' 
    //     src = "/img/cover.png" 
    //     onClick={handleChoice} 
    //     alt="card back" />
    //     </div>
    // </div>
    // )


return (
    <div className="card">
    <div className={flipped ? "flipped" : "" } >
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/cover.png" onClick={handleChoice} alt="cover" />
    </div>
    </div>
    
    )
}