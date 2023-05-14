import React from 'react'
import s from './Input.module.css'

export default function Input({ name, placeholder }) {
  return (
    <input type='text' name={name} placeholder={placeholder} className={s.input} />
  )
}
