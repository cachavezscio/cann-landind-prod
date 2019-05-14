import React from 'react'
import s from './../styles/components/button.module.scss'

export const Button = (props) => {
  return (
    <section className={s.__bound}>
      <button className={s.__button}>{props.label}</button>
    </section>
  )
}