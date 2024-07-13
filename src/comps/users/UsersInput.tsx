export default function UsersInput() {

    function submit(e:Event) {
        e.preventDefault()
        console.log(e.target);
        const newData ={name:"ggg", username:"qqq", email:"wdvfwnve@cei"}

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newData)
        })
        .then(()=> console.log("exe"))
    }

  return (<>
    <h1>UsersInput</h1>
    <form onSubmit={submit}>
        <button type="submit">Add</button>
    </form>
  </>)
}
