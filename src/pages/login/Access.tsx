import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { UsersContext } from '../../datas/UsersProvider'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../datas/AuthProvider'

export default function Access() {
  document.title='Access'
  const usersContext =useContext(UsersContext)!
  ,     [errorMessage, setErrorMessage] =useState(false)
  ,     authContext =useContext(AuthContext)!
  ,     nav =useNavigate()
  // console.log('access', usersContext);
  
  function onSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const {email, password}=(e.target as HTMLFormElement)
    ,     userFinded =usersContext.users .find(user=>
          user.email===email.value && user.password===password.value)
    
    authContext!.onUpdate(userFinded)
    setErrorMessage( userFinded ?false :true )
    nav('/home')
  }

  return <>
  <Navbar />
  <article id="login">
    <div>
      <h2>Accesso</h2>
      {errorMessage && <p className="errorMessage">Verifica che password e email siano corrette</p> }
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <p>Non hai ancora un account? <Link to={'/login'}>Login</Link></p>
        <div><button type="submit">Invio</button></div>
      </form>  
    </div>
  </article>
  </>
}
