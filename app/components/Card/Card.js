import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
// import { CardDeck } from '../CardDeck/CardDeck'

export const Card = (props) => {
  const { currentCard, cancelCard, handleShow} = props

  console.log(handleShow)


  return (
    <div className="card">
      <div>{currentCard.frontCard}</div>
      <div>{currentCard.backCard}</div>
      <button onClick={() => cancelCard()}>Cancel</button>

    </div>
  )
}
