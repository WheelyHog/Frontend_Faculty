import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import s from './CardsContainer.module.css'



export default function CardsContainer() {
  const words = useSelector(store => store.words)
  return (
    <div className={s.cards_container}>
      {words.map((elem, index) => <Card {...elem} key={index} />)}
    </div>
  )
}
