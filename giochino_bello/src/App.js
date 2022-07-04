import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from "react"

function App() {
  const [inp1, setInp1] = useState();
  const [inp2, setInp2] = useState();
  const [inp3, setInp3] = useState();
  const [inp4, setInp4] = useState();
  const [inp5, setInp5] = useState();
  const [inp6, setInp6] = useState();
  const [ListaParole, setListaParole] = useState([]);
  // ponte API-FrontEnd per prendere dati dalle API
  useEffect(() => {
    async function fetchData(){
      try{
        // con async-await non ho più risultati come responses, ma aspetto il caricamento dei dati
        const response = await axios.get("http://127.0.0.1:8000/words");
        const data = await response.data;
        const ListaParole = data.map((e) => e['word']);
        setListaParole(ListaParole);
      } catch(error) {
        console.error(error.message);
      };
    };
    fetchData();
  }, []);
  // utilizzando ListaParole[index] è possibile visualizzare le varie parole nella lista, da chiedere a Bosco come mai ad ogni esecuzione stampa 4 volte le stesse cose
  let word1 = ListaParole[0];
    //targetizza l'innerHTML dell'input
    function inp1Change(e){
      setInp1(e.target.value)
    }
    function inp2Change(e){
      setInp2(e.target.value)
    }
    function inp3Change(e){
      setInp3(e.target.value)
    }
    function inp4Change(e){
      setInp4(e.target.value)
    }
    function inp5Change(e){
      setInp5(e.target.value)
    }
    function inp6Change(e){
      setInp6(e.target.value)
    }
    function controllaParola(){

    }
  return (
    <>
      <div className="App">
        <h1>Il Gioco Inizia</h1>
        <div className="lettere_container">
          <div><p><input type="text" maxLength="5" id="in1" onChange={inp1Change}/></p></div>
          <div><p><input type="text" maxLength="5" id="in2" onChange={inp2Change}/></p></div>
          <div><p><input type="text" maxLength="5" id="in3" onChange={inp3Change}/></p></div>
          <div><p><input type="text" maxLength="5" id="in4" onChange={inp4Change}/></p></div>
          <div><p><input type="text" maxLength="5" id="in5" onChange={inp5Change}/></p></div>
          <div><p><input type="text" maxLength="5" id="in6" onChange={inp6Change}/></p></div>
        </div>
        <div className="gioco_container">
          <div id='dv1-1'></div>
          <div id='dv1-2'></div>
          <div id='dv1-3'></div>
          <div id='dv1-4'></div>
          <div id='dv1-5'></div>
          <div id='dv2-1'></div>
          <div id='dv2-2'></div>
          <div id='dv2-3'></div>
          <div id='dv2-4'></div>
          <div id='dv2-5'></div>
          <div id='dv3-1'></div>
          <div id='dv3-2'></div>
          <div id='dv3-3'></div>
          <div id='dv3-4'></div>
          <div id='dv3-5'></div>
          <div id='dv4-1'></div>
          <div id='dv4-2'></div>
          <div id='dv4-3'></div>
          <div id='dv4-4'></div>
          <div id='dv4-5'></div>
          <div id='dv5-1'></div>
          <div id='dv5-2'></div>
          <div id='dv5-3'></div>
          <div id='dv5-4'></div>
          <div id='dv5-5'></div>
          <div id='dv6-1'></div>
          <div id='dv6-2'></div>
          <div id='dv6-3'></div>
          <div id='dv6-4'></div>
          <div id='dv6-5'></div>
        </div>
        <div className="buttons">
          <button id='btn_bello' onClick={controllaParola}>invia</button>
        </div>
      </div>
      <div className='prova_bella'>
      </div>
    </>
  );
}

export default App;
