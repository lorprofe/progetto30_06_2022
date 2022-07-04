import './App.css';
import axios from 'axios';
import React, { useState } from "react"

function App() {
  const [inp1, setInp1] = useState();
  const [inp2, setInp2] = useState();
  const [inp3, setInp3] = useState();
  const [inp4, setInp4] = useState();
  const [inp5, setInp5] = useState();
  const [inp6, setInp6] = useState();
  const [data, setData] = useState()
  axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(res=>{
    }, [])
    .catch(err=>{console.log("Houston we've got a problem: " +err)});

  return (
    <>
      <div className="App">
        <h1>Il Gioco Inizia</h1>
        <div className="lettere_container">
          <div><p><input type="text" maxLength="5" id="in1" value={inp1}/></p></div>
          <div><p><input type="text" maxLength="5" id="in2" value={inp2}/></p></div>
          <div><p><input type="text" maxLength="5" id="in3" value={inp3}/></p></div>
          <div><p><input type="text" maxLength="5" id="in4" value={inp4}/></p></div>
          <div><p><input type="text" maxLength="5" id="in5" value={inp5}/></p></div>
          <div><p><input type="text" maxLength="5" id="in6" value={inp6}/></p></div>
        </div>
        <div className="gioco_container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="buttons">
          <button>invia</button>
        </div>
      </div>
      <div className='prova_bella'>
        {inp1}
      </div>
    </>
  );
}

export default App;
