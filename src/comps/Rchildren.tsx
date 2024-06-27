import { useParams } from "react-router-dom"
import Effect from "./Effect"

export default function Rchildren({users}) {
  let { urlid } = useParams()
  urlid =Number(urlid)
  console.log("child ", users[urlid])

  return (
  <details open className="usersShow">
    <summary>Utente{urlid}</summary>

  </details>

  )
}
