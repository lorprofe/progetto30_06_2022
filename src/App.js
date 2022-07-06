import { useEffect, useState } from "react";
import Wordle from './components/Wordle'

function App() {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/solutions')
      .then(res => res.json())
      .then(data => {
        // prendo come soluzione una parola a caso della lista
        const randomSolution = data[Math.floor(Math.random()*data.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])

  return (
    // l'operazione solution && ecc.., stampa il component wordle solo quando ho effettivamente un valore all'interno di solution, inoltre lo passo come propietà del component wordle 
    <div className="App">
      <h1>Wordle Tarocco</h1>
      
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App