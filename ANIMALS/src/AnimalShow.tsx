import { useState } from 'react';
import React from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import horse from './svg/horse.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import './AnimalShow.css'

const svgMap: {[key: string]: string} = {
  bird: bird,
  cat: cat,
  dog: dog,
  horse: horse,
  gator: gator,
  cow: cow,
}


interface AnimalShowProps {
  type: string;
}


const AnimalShow: React.FC<AnimalShowProps> = ({type}) => {

  const [size, setSize] = useState(1);

  const handleOnCLick = () => {
    setSize(size + 1);
  }

  return (
    <div className="animal-show" onClick={handleOnCLick}>
      <img className="animal" src={svgMap[type]} alt={`Picture of a ${type}`} />
      <img 
        className='heart' 
        src={heart} 
        alt={`Picture of a ${type}`}
        style={{width: 10 + 10 * size + 'px'}}
      />
    </div>
  )
}

export default AnimalShow;