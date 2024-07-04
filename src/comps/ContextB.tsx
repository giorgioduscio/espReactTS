import ContextC from './ContextC'

export default function ContextB() {
  return (<>
  <div style={{boxShadow:"0 0 20px 0 black"}}>
    <h1>ContextB</h1>
  </div>
  
  <ContextC/>
  </>)
}
