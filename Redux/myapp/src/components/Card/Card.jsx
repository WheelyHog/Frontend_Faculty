import React from 'react'
import { useDispatch } from 'react-redux'
import { removeByIdAction, rotateCardAction } from '../../store/wordsReducer'
import s from './Card.module.css'

export default function Card({ id, rus, eng, lang }) {

  const dispatch = useDispatch()

  return (
    <div className={s.word_card} onClick={() => dispatch(rotateCardAction(id))} onDoubleClick={() => dispatch(removeByIdAction(id))}>
      {lang === 'rus' ? rus : eng}
    </div>
  )
}
