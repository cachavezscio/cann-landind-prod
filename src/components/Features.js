import React from 'react'
import s from './../styles/components/features.module.scss'

const F1 = require('./../assets/f1.png')
const F2 = require('./../assets/f2.png')
const F3 = require('./../assets/f3.png')

const feature = (id, img, alt, feature, description) => {
    return (
        <section id={id} style={{marginBottom: '3rem'}} className="__row middle_sm">
            <figure className={[s.__phone, '__col_xs_12 __col_sm_5 last_sm'].join(' ')}>
                <img src={img} alt={alt}/>
            </figure>
            <section className="__col_xs_12 __col_sm_7 first_sm">
                <h1 className={s.__h1}>{feature}</h1>
                <h3 className={s.__h3}>{description}</h3>
                <p className={s.__p}>Coming Soon</p>
            </section>
        </section>
    )
}

export const Features = () => {
    return(
        <section className='__wrapper'>
            <section id="things" className={[s.__features, '__row'].join(' ')}>
                <section style={{marginBottom: '3rem'}} className={'__row'}>
                    <h3 style={{textAlign:"center"}} className={[s.__h3, '__col_xs_12'].join(' ')}>Founded by Farmers and Distributors, Cannacter levels the cannabis playing field for Buyers and Sellers in a friction-less marketplace and online auction.</h3>
                </section>
                <section className={'__row'}>
                    {feature("offer", F3, "Offer-Up", "Offer-Up", "Auction")}
                    {feature("hook",F1, "Hook-Up", "Hook-Up", "Order")}
                    {feature("re",F2, "Re-Up", "Re-Up", "Re-Order")}
                </section>
            </section>
        </section>
    )
}