import React from 'react'
import s from './../styles/components/textfield.module.scss'

export const Textarea = (props) => {
  return (
    <section className={s.__bound}>
      <label>{props.name}</label>
      <textarea onChange={props.onChange} className={s.__textarea} placeholder={props.placeholder} name={props.name}></textarea>
    </section>
  )
}