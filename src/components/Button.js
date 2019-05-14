import React from 'react'
import s from './../styles/components/button.module.scss'

export const Button = (props) => {
  return (
    <section className={s.__bound}>
      <a href={props.href} className={s.__button}>{props.label}</a>
    </section>
  )
}