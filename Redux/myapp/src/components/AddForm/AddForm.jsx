import React from 'react'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import s from './AddForm.module.css'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addNewWordAction } from '../../store/wordsReducer'

export default function AddForm() {

  let dispatch = useDispatch()

  const createCard = (e) => {
    e.preventDefault();
    const { eng, rus } = e.target;

    const newCard = {
      id: uuidv4(),
      eng: eng.value,
      rus: rus.value,
      lang: 'eng'
    }
    dispatch(addNewWordAction(newCard))
    e.target.reset()
  }


  return (
    <form className={s.form} onSubmit={createCard}>
      <Input name='rus' placeholder='Enter word in russian' />
      <Input name='eng' placeholder='Enter word in english' />
      <Button text='Add word' />
    </form>
  )
}
