export function reducer(state:object, action:object) {

    // console.log("state", state, action);
    function result(){
      switch(action.type){
        case "patch":
          return {...state, [action.name]: action.value}
  
        case "reset": 
          return { name:"", email:"", age:Number, weight:Number }
  
        default: return state
      }
    }
    // localStorage.setItem(action.name, action.value)
    return result()
}