import './App.css';
import axios from 'axios';

function App() {
  axios.get("http://127.0.0.1:8000/words")
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>{console.log("Houston we got a problem: " +err)})
  return (
    <div className="App">
      <h1>Il Gioco Inizia</h1>
      <div className="lettere_container">
        <div><p><input type="text" maxLength="5" id="in1"/></p></div>
        <div><p><input type="text" maxLength="5" id="in2"/></p></div>
        <div><p><input type="text" maxLength="5" id="in3"/></p></div>
        <div><p><input type="text" maxLength="5" id="in4"/></p></div>
        <div><p><input type="text" maxLength="5" id="in5"/></p></div>
        <div><p><input type="text" maxLength="5" id="in6"/></p></div>
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
        <button>cancella</button>
        <button>invia</button>
      </div>
    </div>
  );
}

export default App;
