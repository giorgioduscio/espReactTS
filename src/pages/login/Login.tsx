import './Login.css'
import { UsersContext } from "../../datas/UsersProvider"
import Navbar from "../../components/navbar/Navbar";
import User from "../../datas/UserInterface";
import { randomId, randomImage } from "../../tools/randomCompiler";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useContext } from "react";

export default function Login() {
  document.title='Login'
  const usersContext =useContext(UsersContext) 
  ,     nav =useNavigate() 
  
  function onSubmit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const {username, email, password} =(event.target as HTMLFormElement)
    ,     newUser :User ={
        email: email.value,
        password: password.value,
        username: username.value,
        id: randomId(),
        imageUrl: randomImage(),
    }
    usersContext!.postUser(newUser)
    nav('/home')
  }

  return <>
  <Navbar />
  <article id="login">
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Username" name="username" required />  
        <input type="email" placeholder="Email" name="email" required />  
        <input type="password" placeholder="Password" name="password" required />
        <p>Hai già un account? <Link to={'/access'}>Accedi</Link></p>
        <div><button type="submit">Invio</button></div>
      </form>
    </div>
  </article>
  </>
}
