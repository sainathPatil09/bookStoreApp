import React from 'react'
import Contact from '../components/Contact'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'

const Contacts = () => {
    return (
        <>
            <Navbar2 />
            <div className='flex items-center min-h-screen '>
                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default Contacts
