import React from 'react'
import s from './../styles/components/textfield.module.scss'

export const Textfield = (props) => {
  return (
    <section className={s.__bound}>
      <label>{props.name}</label>
      <input type={props.type} onChange={props.onChange} value={props.value} className={s.__textfield}  placeholder={props.placeholder} name={props.name}></input>
    </section>
  )
}