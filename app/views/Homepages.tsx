import React from 'react'
import FirstLayout from './Layout/FirstLayout'
import SecondLayout from './Layout/SecondLayout'
import ThirdLayout from './Layout/ThirdLayout'
import FouthLayout from './Layout/FouthLayout'
import AboutLayout from './Layout/AboutLayout'
import AccountLayout from './Layout/AccountLayout'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Homepages() {
    return (
        <>
        <Header/>
            <FirstLayout />
            <SecondLayout />
            <ThirdLayout />
            <FouthLayout />
            <AboutLayout />
            <AccountLayout />
        <Footer/>
        </>
    )
}

export default Homepages