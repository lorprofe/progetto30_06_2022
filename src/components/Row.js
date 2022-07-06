import React from 'react'

export default function Row({ tries, currentGuess }) {
    // solo se tries ha un valore attivo l'if, altrimenti restituisco tutte righe vuote
    if (tries) {
        return (
            // in questo modo scrivo lettera per lettera nei div e ne posso modificare il colore, e mantiene i vecchi input
            <div className="row vecchio">
                {tries.map((letter, index) => (
                    <div key={index} className={letter.color}>{letter.key}</div>
                ))}
            </div>
        )
    }
    // if che permette di vedere l'input da tastiera in tempo reale
    if (currentGuess) {
        let letters = currentGuess.split('')
        return (
            // a linea 24 in questo modo non ho più il problema che mi si cancellano i div, ma filla in automatico con i rimanenti div vuoti man mano che varia l'inputs 
            <div className='row current'>
                {letters.map((letter, i) => (
                    <div key={i} className='filled'>{letter}</div>
                ))}
                {[...Array(5 - letters.length)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        )
    }

  return (
    <div className='row'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
