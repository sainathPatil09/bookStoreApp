import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='p-6 container md:mx-auto  md:w-1/2 space-y-3 shadow-2xl border border-slate-400 rounded-lg ml-2 mr-2  '>
                <h1 className='text-4xl text-blue-600 font-bold'>Contact Us</h1>

                <form action="" className='gap-4 flex flex-col'>



                    <span>Name</span>
                    <input className='w-1/2 rounded-lg px-1 py-2  bg-white dark:text-black ' type="email" placeholder='Enter Your Name' />
                    <span>Email</span>
                    <input className='w-1/2 rounded-lg px-1 py-2  bg-white dark:text-black ' type="email" placeholder='Enter Your Email' />
                    <span>Message</span>
                    <textarea className='w-1/2 rounded-lg px-1 py-2  bg-white dark:text-black ' type="email" placeholder='Enter Your Email' />

                    <div>

                        <button className="px-1 py-1 hover:bg-blue-600 hover:text-white border border-blue-600 rounded-xl cursor-pointer">Signup  </button>

                    </div>

                </form>
            </div>


        </>
    )
}

export default Contact
