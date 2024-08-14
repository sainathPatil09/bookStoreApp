import React from 'react'

const Banner = () => {
    return (
        <>
            {/* <div className='navbar flex max-w-screen-2xl container mx-auto md:flex-row flex-col '> */}
            <hr/>
            <div className='max-w-screen-2xl container flex justify-between md:w-[85vw] mx-auto md:flex-row flex-col p-6'>

                <div className="order-2 md:order-1 w-full md:w-1/2 md:mt-24 mt-10">
                    <div className='space-y-10'>

                        <h1 className='text-6xl font-bold'>Ocean of Books.<br />
                            Be a <span className='text-blue-600'> Pirate of Ocean!!</span>
                        </h1>

                        <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, illum vel ipsa facilis suscipit praesentium dolorem iusto et veritatis! Maiores, dolorem nisi voluptatem alias, modi eaque. </p>

                        <label className="input input-bordered flex items-center gap-2 bg-white dark:text-white text-black border outline  border-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input  type="text" className="grow  text-black" placeholder="Enter your Email to login" />
                        </label>

                        <button className="btn btn-outline border-blue-600 hover:bg-blue-600 outline">Get Started</button>
                    </div>
                </div>

                <div className=" order-1 w-full md:w-1/2 flex items-center justify-center  mt-10">
                    <img className='h-3/4 ' src="banner.gif" alt="img" />
                </div>
            </div>

        </>
    )
}

export default Banner
