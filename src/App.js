import React, { useState, useEffect } from "react";
import './styles/style.css'
import Nav from "./components/Nav";

function App() {

  const [data, setData] = useState()
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://jsonplaceholder.typicode.com/todos");
      const jsonData = await response.json();

      console.log(jsonData)
      setData(jsonData)
    }
    fetchData()

  }, [])

  useEffect(() => {
    console.log(counter);
    console.log(`counter is: ${counter}`)
  }, [counter])

  function increase() {
    setCounter(prev => prev+1)
  }

  return (
    <div className="App">
      {
      data ? 
      <Nav arr={data} third={"random"} /> : 
      <h1>Loading...</h1> 
      } <br />

      <button onClick={increase}>{counter}</button>
    </div>
  );
}

export default App;
