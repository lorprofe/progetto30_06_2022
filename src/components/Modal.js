// modal che apparirà alla fine del gioco
import React from 'react'

export default function Modal({ isCorrect, turn, solution}) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>Hai vinto!</h1>
                <p className='solution'>{solution}</p>
                <p>Hai indovinato in {turn} tentativi, bravo!</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Tranquillo, andrà meglio la prossima volta :)</h1>
                <p>La parola giusta era: </p>
                <p className='solution'>{solution}</p>
            </div>
        )}
    </div>
  )
}
