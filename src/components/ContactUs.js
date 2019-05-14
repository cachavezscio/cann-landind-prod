import React, {useState} from 'react'
import { Textfield } from './Textfield';
import { Textarea } from './TextArea';

import s from './../styles/components/aboutus.module.scss'
import { Button } from './Button';

export const ContactUs = () => {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  return (
    <section id="contact" className={s.__contact}>
      <h2 className={s.__h2}>Contact Us</h2>
      <form className={s.__form}>
        <Textfield type="text" onChange={e => setName(e.target.value)} value={name} name="name" placeholder="Name" />
        <Textfield type="text" value={subject} onChange={e => setSubject(e.target.value)} name="subject" placeholder="Subject" />
        <Textarea value={body} onChange={e => { setBody(e.target.value)}} name="body" placeholder="Type your message here..." />
        <Button href={`mailto:steffo@cannacter.com?subject=${subject} - ${name}&body=${body}`} label="Submit"/>
      </form>
    </section>
  )
}