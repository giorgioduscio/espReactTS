import { ChangeEvent, Component } from 'react';

export default class Dashboard extends Component<any, any> {
  constructor(props:any) {
    super(props);
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
    return (
      <article>
        <div>
          <h1>Dashboard</h1>
          <p>Count: {this.state.count}</p>
          <button onClick={this.handleClick}>Increment</button>
          <input type="text" defaultValue={this.state.name} onChange={this.handleChange} />
        </div>
      </article>
    );
  } 
}