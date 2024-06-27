import { useContext } from "react";
import { HHH } from "./ContextA";

export default function ContextC() {
  const user =useContext(HHH)
  // console.log('contextB', animals);

  return (
    <div>
      <h3>ContextC</h3>
      <p>{user}</p>
      {/* {animals.map(animal=>{ 
        return <div key={animal}>{animal}; </div> 
      })} */}
    </div>
  )
}
