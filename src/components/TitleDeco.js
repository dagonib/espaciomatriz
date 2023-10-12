import React from 'react'
import '../styles/components/titledeco.styles.scss'

const TitleDeco = ({text}) => {
    return (
        <h1 className='titledeco' style={titledeco}>{text}</h1>
    )
}

const titledeco = {
    fontFamily: 'winsome, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
}

export default TitleDeco