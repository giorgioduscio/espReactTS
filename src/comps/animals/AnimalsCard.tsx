import { useContext } from "react"
import { AnimalsContext } from "../../datas/AnimalsDatas"

export default function AnimalsCard() {
  const {animals, setAnimals} =useContext(AnimalsContext)

  return (<>
    <h1>Beta</h1>
    <div>{animals.map((animal, i)=>
      <p 
        key={i} 
        onClick={()=>setAnimals([...animals, animal])}
        >{animal}
      </p>
    )}</div>
  </>)
}
