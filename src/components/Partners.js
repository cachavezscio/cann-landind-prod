// eslint-disable-next-line no-unused-vars
import React from 'react'
import s from './../styles/components/partners.module.scss'

// eslint-disable-next-line no-undef
const IMG1 = require('./../assets/google.png')
const IMG2 = require('./../assets/hypur.png')

export const Partners = () => {
    return(
        <section style={{marginBottom: '3rem'}} className="__wrapper">
            <section className="__row center_xs">
            <section className="__col_xs_12">
                <h1 className={s.__h1}>Let farmers be farmers</h1>
            </section>
            <section className="__col_xs_12">
                <h3 className={s.__h3}>Partners</h3>
            </section>
            <section className="__col_xs_12 __col_sm_4">
                <figure className={s.__partner}>
                    <img src={IMG1} alt="Google Partners"></img>
                </figure>
            </section>
            <section className="__col_xs_12 __col_sm_4">
                <figure className={s.__partner}>
                    <img src={IMG2} alt="Google Partners"></img>
                </figure>
            </section>
            </section>
        </section>
    )
}