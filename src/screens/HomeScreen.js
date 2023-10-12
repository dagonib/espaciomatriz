import React from 'react'
import AboutMe from '../components/HomeScreen/AboutMe'
import Header from '../components/HomeScreen/Header'
import NoteQuote from '../components/HomeScreen/NoteQuote'
import Media from '../components/HomeScreen/Media'

const HomeScreen = () => {
    return (
        <>
            <Header />
            <AboutMe />
            <NoteQuote />
            <Media />
        </>
    )
}

export default HomeScreen
