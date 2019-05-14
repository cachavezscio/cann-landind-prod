import React from 'react'

export const Canvas = (props) => {
    return(
        <main id="top" style={{paddingTop: "5rem"}}>
            {props.children}
        </main>
    )
}