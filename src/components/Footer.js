import React from 'react'
import s from './../styles/components/footer.module.scss'
import './../styles/components/grid.scss'
import { Mail, Instagram, Facebook, Calendar } from 'react-feather';

export const Footer = () => {
  return (
    <>
    <footer className={s.__footer}>
      <section className="__wrapper">
        <section className="__row">
          <section className="__col_xs_12 __col_sm_6 __col_md_4">
            <h2 className={s.__h2}>About Us</h2>
            <p className={s.__p}>Founded by farmers, Cannacter levels the cannabis playing fields for buyers and sellers with an effective marketplace and online auction.</p>
          </section>
          <section className="__col_xs_12 __col_sm_6 __col_md_4">
            <h2 className={s.__h2}>Contact</h2>
            <a rel="noopener noreferrer" className={s.__social} href="mailto:steffo@cannacter.com?Subject=Hello!"><Mail size={24}/>hello@cannacter.com</a>
            <a rel="noopener noreferrer" className={s.__social} target="_blank" href="https://www.facebook.com/Cannacter-1839526109472881"><Facebook size={24}/>fb/cannacter</a>
            <a rel="noopener noreferrer" className={s.__social} target="_blank" href="https://www.facebook.com/events/2904419576257345/"><Calendar size={24}/>Facebook Events</a>
            <a rel="noopener noreferrer" className={s.__social} target="_blank" href="https://www.instagram.com/cannacter/?hl=en"><Instagram size={24}/>@cannacter</a>
          </section>
        </section>
      </section>
    </footer>
    <section className={["__row", s.__cr].join(' ')}>
      <section className="__col_xs_12">
        <p>© 2019 Copyright Cannacter</p>
      </section>
      </section>
      </>
  )
}
