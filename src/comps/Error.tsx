/* eslint-disable no-var */
import Navbar from './Navbar'

export default function Error() {
  document.title="Errore"
  
  return (<>
  <Navbar/>
  <div>
    <h1>Error</h1>
    <hr />
    <figure>
      <abbr title="Errore">
        <img 
          src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_640.png" 
          alt="Trulli" 
          style={{width: "200px", margin: "auto"}}
        />
      </abbr>
      <figcaption>Immagine errore</figcaption>
    </figure>

  </div>
  </>)
}
