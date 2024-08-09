import { createContext, useState } from 'react'

export const AnimalsContext =createContext([])

export default function AnimalsDatas() {
  const [animals, setAnimals] =useState(["Anatra", "Bisonte", "Cane"])
  console.log('animals', animals);
  

  return {animals, setAnimals}
}
