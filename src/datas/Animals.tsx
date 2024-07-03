import { createContext, useState } from "react"
import ContextA from "../comps/ContextA"

export const animalsContext =createContext({})

export default function Animals() {
  const [animals, setanimals] =useState([
    {id:1, name:"Alce"},
    {id:2, name:"Bufalo"},
    {id:3, name:"Cane"},
  ])
  return animals
}
