import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Course from '../components/Course'
const Courses = () => {
    return (
        <>
            <Navbar2 />
            <div className='min-h-screen'>
            <Course />

            </div>
            <Footer />
        </>
    )
}

export default Courses
