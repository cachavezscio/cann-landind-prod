import React from 'react'
import s from './../styles/components/textfield.module.scss'

export const Textfield = (props) => {
  return (
    <section className={s.__bound}>
      <label>{props.name}</label>
      <input className={s.__textfield} type="text" placeholder={props.placeholder} name={props.name}></input>
    </section>
  )
}