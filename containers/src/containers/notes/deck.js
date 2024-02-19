import { Button, Input, Rating } from "@mui/material"
import { useEffect, useState } from "react"
import CardContainer from "./CardContainer"

import updateSM2Algorithm from '../../../../helpers/updateSM2Algorithm'
import { usePost, useGet } from "@/hooks"
import { notesUrl } from "@/urls"

function Deck({ }) {
  const [text, setText] = useState('')
  const { data: cards } = useGet({ url: notesUrl.listNotes })
  console.log("🚀 ~ Deck ~ cards:", cards)
  const { post: addNote } = usePost({ url: notesUrl.addNotes })

  const addCardHandler = () => {
    const newNote = {
      ques: text,
    }
    const newCards = [...cards]
    newCards.push({
      id: crypto.randomUUID(),
      ques: text,
      createdAt: new Date(),
      rate: 0,
      interval: 0,
      repetitionNumber: 0,
      easinessFactor: -100
    })
    setText('')
    addNote(newNote)
  }

  const textChangeHandler = (e) => {
    const { value } = e.target
    setText(value)
  }

  const rateChangeHandler = (selectedCardId, rate) => {
    const newCards = cards.map((card) => {
      const { id, repetitionNumber, easinessFactor, interval } = card
      if (id === selectedCardId) {
        const { repetitionNumber: newRepetitionNumber, easinessFactor: newEasinessFactor, interval: newInterval } = updateSM2Algorithm(rate, repetitionNumber, easinessFactor, interval)
        return {
          ...card,
          repetitionNumber: newRepetitionNumber, easinessFactor: newEasinessFactor, interval: newInterval
        }
      }
      return card
    })

    setCards(newCards)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      addCardHandler()
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        deck
      </h1>

      <Input onKeyDown={handleKeyDown} value={text} onChange={textChangeHandler} />
      <Button onClick={addCardHandler}>
        Add
      </Button>
      <CardContainer rateChangeHandler={rateChangeHandler} cards={cards} />
    </>
  )
}

export default Deck