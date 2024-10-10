import '../RouterDrop/RouterDrop.css'
import { useContext } from 'react'
import closeDropdown from '../../tools/closeDropdown'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../datas/AuthProvider'

export default function AccountDrop() {
  closeDropdown('accountDrop')
  let authContext =useContext(AuthContext)!
  
  // console.log('accountDrop', authContext);

  return <>
  <details className="accountDrop">
    <summary>{authContext.localeUser
      ?<img src={authContext.localeUser.imageUrl} alt={authContext.localeUser.username} />
      :<span className="material-symbols-outlined">person</span>
    }</summary>
    <div>{authContext.localeUser
      ?<b onClick={()=> authContext.onDelete()}>Esci</b>
      :<>
      <Link to={'/access'}>Accedi</Link>
      <Link to={'/login'}>Login</Link>
      </>
    }</div>
  </details>
  </>
}
