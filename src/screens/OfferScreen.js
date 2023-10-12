import React from 'react'
import Introduction from '../components/offer/Introduction'
import Ciclica from '../components/offer/Ciclica'
import Climaterica from '../components/offer/Climaterica'
import Ebook from '../components/offer/Ebook'
import Motivation from '../components/offer/Motivation'

const OfferScreen = () => {
    return (
        <>
            <Introduction />
            <Motivation />
            <Ciclica />
            <Climaterica />
            <Ebook />
        </>
    )
}

export default OfferScreen
