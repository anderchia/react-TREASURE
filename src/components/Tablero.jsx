import React, { useState } from 'react'

export default function Tablero({ card, position }) {

const [cara, setCara] = useState(card.x)

const changeCara = (aleatory)=>{

if (position === aleatory){
    setCara(card.chest)
    setTimeout(() =>{
        alert ("You got it! Congratulations!")
        window.location.reload()
    }, 300)

} else {
    setCara(card.skull)}
}

  return (
    <div>
        <img onClick={() => changeCara(card.aleatory)} src={cara} alt={card.aleatory}></img>
    </div>
  )
}

