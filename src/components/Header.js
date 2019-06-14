// eslint-disable-next-line no-unused-vars
import React from 'react'
import s from './../styles/components/header.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import DATA from './../data.json';


// eslint-disable-next-line no-undef
const LOGO = require('./../assets/logo.jpg') 

const SmoothScroll = () => {
    return (
        <section className={s.__anchors}>
            <AnchorLink className={s.__link} offset={() => 80} href='#offer'>Offer-Up</AnchorLink>
            <AnchorLink className={s.__link} offset={() => 80} href='#hook'>Hook-Up</AnchorLink>
            <AnchorLink className={s.__link} offset={() => 80} href='#re'>Re-Up</AnchorLink>
            <AnchorLink className={s.__link} offset={() => 80} href='#contact'>Contact</AnchorLink>
        </section>
    )
}

export const Header = () => {
    return (
        <nav className={s.__nav}>
            <AnchorLink className={s.__link} offset={() => 0} href='#top'>
                <figure className={s.__logo}>
                <img src={LOGO} alt="Cannacter brand"/>
                </figure>
            </AnchorLink>
            <section className={s.__navigator}>
                <SmoothScroll />
                <figure className={s.__leaf}>
                    <figcaption>{DATA.cities}</figcaption>
                </figure>
            </section>
        </nav>
    )
}