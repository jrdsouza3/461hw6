import './App.css';
import React, {useState, useEffect} from 'react'


function App() {


  const[name, setName] = useState("")
  const[output, setOutput] = useState("")
  const[endpoint, setEndpoint] = useState ("/tester?name=")

  // useEffect(() => {
  //   fetch('/tester').then(response => response.json()).then(data =>{setOutput(data.lastname)})
  // },[] );
  useEffect(() => {
    //console.log(name)
    setEndpoint("/tester?name=".concat(name))
  }, [name])

  const updateName = (newName) => {
    setName(newName.target.value)
    setEndpoint("/tester?name=".concat(name))
  }




  const sendtoServer = () => {
    //console.log(name)
    //console.log(endpoint)
    fetch(endpoint).then(response => response.json()).then(data =>{
      setOutput(data.lastname);
      console.log(data.lastname);
    })
    setName("");
  }




return (
  <div>
    <h1> HELLO, this is Jason D'Souza site </h1>
     <h3> you will get last name D'Souza for first name Jason</h3>

    <b>your input, request to server</b>
    <input type="text" placeholder = "first `Name here" value= {name} onChange = {updateName} />
    <button onClick= {sendtoServer}> Send to Server </button>
  
    <b><br/> output from server</b> 
    <p>  The output from the server is here: {output} </p> 

  

  </div>
);
}


export default App;