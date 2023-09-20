import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)]
}

const App: React.FC = () => {
  const [animals, setAnimals] = useState<string[]>([]);


  const handleAddAnimal = () => {
    setAnimals([...animals, getRandomAnimal()]);
  }

  const animalList = (animals: string[]) => {
    return animals.map((animal,index) => {
      return <AnimalShow key={index} type={animal}/>
    }) 
  }

  return (
    <div className="app">
      <div>Show list of animals here</div>
      <button onClick={handleAddAnimal}>Add Animal</button>
      <div className="animal-list">{animalList(animals)}</div>
    </div>
  )
}

export default App;