import React from 'react'
import { useDispatch } from 'react-redux'
import { allToLangAction } from '../../../store/wordsReducer';
import s from './Button.module.css'

export default function Button({ text }) {

  const dispatch = useDispatch();

  return (
    <button className={s.button} onClick={() => dispatch(allToLangAction(text))}>
      {text}
    </button>
  )
}
