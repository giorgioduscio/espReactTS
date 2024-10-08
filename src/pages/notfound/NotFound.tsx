import Navbar from '../../components/navbar/Navbar'
import './NotFound.css'

export default function NotFound() {
  document.title="404"
  
  return <>
  <Navbar/>
  <article id="nf">
    <div>
      <h1>Pagina non trovata</h1>
      <hr />
      <figure>
          <abbr title="Errore">
            <img src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_640.png" alt="error" />
          </abbr>
        <figcaption>Pagina non trovata</figcaption>
      </figure>
      <p>Assicurati di aver digitato correttamente il link della pagina</p>

    </div>

  </article>
  </>
}