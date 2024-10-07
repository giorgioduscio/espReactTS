import './Home.css'
import Navbar from '../../components/navbar/Navbar';
import { ChangeEvent, Component } from 'react';
export default class Home extends Component<any, any> {
  constructor(props:any) {
    super(props);
    document.title ='Home'
    this.state ={
      count: 0,
      name: 'John Doe'
    };
  }

  handleClick = () =>{
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  handleChange = (event:ChangeEvent) => {
    const newValue =(event.target as HTMLInputElement).value
    this.setState({ name:newValue });
    console.log(newValue);
  };

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

        <main>
          <p>Count: {this.state.count}</p>
          <button onClick={this.handleClick}>Increment</button>
          <input type="text" defaultValue={this.state.name} onChange={this.handleChange} />
        </main>
      </div>
    </article>
    </>
  } 
}