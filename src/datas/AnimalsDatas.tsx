import { useState } from 'react'

export default function AnimalsDatas() {
  const [animals, setAnimals] =useState(["Anatra", "Bisonte", "Cane"])
  console.log('animals', animals);
  

  return {animals, setAnimals}
}
