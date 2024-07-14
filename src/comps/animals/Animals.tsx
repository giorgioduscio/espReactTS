import "./Animals.module.css"
import AnimalsDatas from "../../datas/AnimalsDatas";
import Navbar from "../navbar/Navbar";
import AnimalsCard from "./AnimalsCard";

export default function Animals() {
  const {animals, setAnimals} =AnimalsDatas()
    
  return (<>
  <Navbar/>

  <article>
    <h1>Alpha</h1>
    <div>{animals.map((animal, i)=>
      <p 
        key={i} 
        onClick={()=>setAnimals([...animals, animal])}
        >{animal}
      </p>
    )}</div>

    <AnimalsCard/>
  </article>
  </>)
}
