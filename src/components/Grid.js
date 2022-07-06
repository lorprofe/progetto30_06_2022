import React from 'react'
import Row from './Row'

export default function Grid({ guesses, currentGuess, turn}) {
  return (
    // questo div 
    <div>
        {guesses.map((tries, index) => {
            // if che serve per quanto riguarda l'input in tempo reale dell'user
            if (turn === index){
                return <Row key={index} currentGuess={currentGuess} />
            }
            return <Row key={index} tries=
            {tries} />
        })}
    </div>
  )
}
