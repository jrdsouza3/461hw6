# 461hw6



import './App.css';
import React, {useState, useEffect} from 'react'


function App() {


  const[name, setName] = useState("")
  const[output, setOutput] = useState("rats")

  useEffect(() => {
    fetch('/names').then(res => res.json()).then(data=> { setOutput(data.lastname); 
    })
  }, []);

  const updateName = (newName) => {
    setName(newName.target.value)
  }


  const sendtoServer = () => {
    console.log(name)

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
    <p>  The output from the server is : {output} </p>

  </div>
);
}


export default App;
