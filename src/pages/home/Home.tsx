import './Home.css'
import Navbar from '../../components/navbar/Navbar';
import { Component } from 'react';
import HomeDatas from './HomeDatas';
import { Link } from 'react-router-dom';
export default class Home extends Component<any, any> {
  constructor(props:any) {
    super(props);
    document.title ='Home'
    this.state ={
      count: 0,
      name: 'John Doe'
    };
  }

  render() {
    return <>
    <Navbar/>
    <article id="home">
      <div>
        <header>
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="reactLogo" />
          <h2>Laboratorio React</h2>
          <p>Benvenuto nel laboratorio del procione! Qui troverai numerose applicazioni in fase di sviluppo create per scopo didattiche</p>
        </header>

        <main>{HomeDatas().map(article=> 
          <div key={article.title}>
            <img src={article.imageUrl} alt={article.title} />
            <div className="text">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div><Link to={article.routerLink}>Visita</Link></div>
            </div>
          </div>
        )}</main>

        <footer></footer>
      </div>
    </article>
    </>
  } 
}