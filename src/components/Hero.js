import React from 'react'
import s from './../styles/components/hero.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const IMAGE = require('./../assets/phone1.png')
const ARROW = require('./../assets/arrow-down.svg')

export const Hero = () => {
    return (
        <section className={s.__hero}>
        <section className='__wrapper'>
            <section className="__row middle_md">
                <section className="__col_xs_12 __col_md_7">
                    <section className="__col_xs_12">
                        <h1 className={s.__h1}>Fair-Market Exchange for Emerging Markets</h1>
                    </section>
                    <section className="__col_xs_12">
                        <h2 className={s.__h2}>Where surplus meets demand</h2>
                    </section>
                </section>
                <section className="__col_xs_12 __col_md_5 center_xs middle_xs">
                    <figure className={[s.__phone, '__col_xs_12'].join(' ')}>
                        <img alt="Cannacter application home screen" src={IMAGE}></img>
                    </figure>
                </section>
            </section>
            <AnchorLink className={s.__scroll} offset={() => 100} href='#things'><img src={ARROW} alt="Scroll down"/></AnchorLink>
            </section>
        </section>
    )
}
