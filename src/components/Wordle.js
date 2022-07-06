// la maggior parte dell'UI vivrà in questo component
import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Modal from './Modal'

export default function Wordle({ solution }) {
    // prima di tutto devo grabbare dall'hook l'handleKeyUp e la currentGuess
    const { currentGuess, handleKeyUp, guesses, isCorrect, turn } = useWordle(solution)
    // useState per il modal
    const [showModal, setShowModal] = useState(false)
    // nell'useEffect metto un addEventListener globale (window), il keyup si è l'EventListener che fa riferimento a quando il tasto della tastiera si alza, quindi dopo che l'utente ha digitato
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)
        // in questo if controllo se ifCorrect è passato da false a true, nel caso l'utente ha vinto e avendolo messo come dipendencie dello useEffect, quando varia detatcha lo useEffect
        if (isCorrect) {
            // dopo un secondo dalla fine del gioco mostro il modal
            setTimeout(() => setShowModal(true), 1000)
            window.removeEventListener('keyup', handleKeyUp)
        }
        if (turn > 5) {
            // dopo 1 secondo dalla fine mostro il modal, se turn > 5 ovvero se l'utente ha esaurito i tentativi
            setTimeout(() => setShowModal(true), 1000)
            window.removeEventListener('keyup', handleKeyUp)
        }
        // il return mi permette di evitare la coda di EventListener
        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, isCorrect, turn]) 
    // mettere un valore tra le quadre alla fine di useEffect fa sì che reRunni ogni volta che quel valore ha un cambiamento

  return (
    <div>
        <div>Prova ad indovinare la parola misteriosa, hai 6 tentativi!</div><br></br>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  )
}
