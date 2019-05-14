import React from 'react'
import { Textfield } from './Textfield';
import { Textarea } from './TextArea';

import s from './../styles/components/aboutus.module.scss'
import { Button } from './Button';

export const ContactUs = () => {
  return (
    <section id="contact" className={s.__contact}>
      <h2 className={s.__h2}>Contact Us</h2>
      <form className={s.__form}>
        <Textfield name="name" placeholder="Name" />
        <Textfield name="email" placeholder="Email Address" />
        <Textfield name="subject" placeholder="Subject" />
        <Textarea name="subject" placeholder="Type your message here..." />
        <Button label="Submit"/>
      </form>
    </section>
  )
}