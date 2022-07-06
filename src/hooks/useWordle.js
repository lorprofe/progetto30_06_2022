import { useState } from "react";

const useWordle = (solution) => {
    // lista di vari state che serviranno nelle funzioni seguenti
    // gestisce il numero dei try
    const [turn, setTurn] = useState(0)
    // fa il tracking di ciò che viene premuto su tastiera, ogni click sulla tastiera aggiorna lo stato -> handleKeyUp()
    const [currentGuess, setCurrentGuess] = useState('')
    // gestisce la lista dei tentativi, ogni tentativo è un array
    const [guesses, setGuesses] = useState([...Array(6)])
    // gestisce la lista dei tentativi, ogni tentativo è una stringa, li separo per evitare che l'user inserisca due volte la stessa parola
    const [history, setHistory] = useState([])
    // gestisce se il tentativo è corretto o meno
    const [isCorrect, setIsCorrect] = useState(false)

    // funzione che formatta l'input dell'user da stringa ad array di oggetti, a cui aggiungo le proprietà per checkare se la lettera c'è ecc...
    const formatInputTry = () => {
        let solutionArray = [...solution]
        let formattedTry = [...currentGuess].map((letter) => {
            return {key: letter, color: "grey"}
        })
        // ciclo per cercare le lettere in posizione giusta
        formattedTry.forEach((letter, index) => {
            if (solutionArray[index] === letter.key){
                formattedTry[index].color = "green"
                // ciò ci permette di evitare un double match nel caso in cui la lettera sia anche gialla, perché se è già verde viene "nascosta" dall'array
                solutionArray[index] = null
            }
        })
        // ciclo per cercare le lettere presenti ma in posizione errata
        formattedTry.forEach((letter, index) => {
            if (solutionArray.includes(letter.key) && letter.color !== "green") {
                formattedTry[index].color = "yellow"
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })
    return formattedTry
    }

    // funzione che salva i tentativi dell'utente, update dello stato isCorrect se l'input è corretto altrimenti aggiunge 1 allo stato turn, che viene salvato per vedere i tentativi dell'utente
    const addNewInputTry = (formattedTry) => {
        // checko se il tentativo è uguale alla soluzione
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        // altrimenti in una nuova variabile mette tutti i tentativi fatti (parole) e li salva nella posizione data dal turn state
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedTry
            return newGuesses
        })
        // aggiungo le parole in formato stringa nello stato history, che serve a controllare di non mettere due volte lo stesso input
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        // aumento il turn state così da aumentare il "counter" ad ogni submit della parola
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        // devo pulire il currentGuess così da poter inserire una nuova parola una volta premuto invio
        setCurrentGuess('')
    }

    // funzione che gestisce gli event e li registra per vedere quale parola è stata immessa dall'utente, se l'utente preme invio allora viene aggiunta come nuovo tentativo
    const handleKeyUp = ({ key }) => {
        // l'utente deve poter fare il submit della parola, quindi faccio il check per la key = enter
        if (key === 'Enter'){
            // aggiunge il tentativo solo se il counter è minore di 5, altrimenti ha esaurito i tentativi
            if (turn > 5) {
                console.log("Hai usato tutti i tentativi a disposizione!")
                return
            }
            // non permetto l'input di due parole uguali (sarebbe controsenso)
            if (history.includes(currentGuess)) {
                console.log("Hai già provato con questa parola!")
                return
            }
            // checko che la parola abbia 5 lettere altrimenti non abilito il submit
            if (currentGuess.length !== 5) {
                console.log("La parola deve essere di 5 caratteri!")
                return
            }
            // chiamo la funzione solo se bypasso tutte le condizioni di break
            const formatted = formatInputTry()
            addNewInputTry(formatted)
        }
        // nel caso in cui l'utente provi a cancellare deve poter correggere eventuali misclick
        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                // elimina l'ultimo carattere della stringa
                return prev.slice(0, -1)
            })
            return 
        }
        // espressione che serve a verificare che l'input da tastiera sia un carattere A-Z o a-z
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                // in questo modo il setCurrentGuess concatenerà il valore precedente al carattere premuto dall'utente sulla tastiera
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }
    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWordle