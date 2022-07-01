import logo from './logo.svg';
import './App.css';

function App() {

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
