
import './App.css';
import Tablero from './components/Tablero'
import x from './images/x.png'
import skull from './images/skull.png'
import chest from './images/chest.png'
import { useState } from 'react';


const aleatory = (min,max)=>{
  return Math.floor(Math.random()*(max-min))+min; 
}

const images = {
  x: x,
  chest: chest,
  skull: skull,
  aleatory: aleatory(1,25)
}

function App() {
  const position = 1;
  const [counter, setCounter]= useState(0)
    
    function clicked(){
      setCounter(counter+1)
    }

    var treasure = [];
    for (let i = position; i < 25; i++)
    treasure.push(<Tablero card={images} position={position+i}/>)

  return (
    <div className='tabla' onClick={clicked}>
    {treasure}
    <div className='contador'>
      <h2>{counter}</h2>
    </div>
    </div>
  );
}

export default App;
