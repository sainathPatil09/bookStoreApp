import React from 'react'

const Cards = ({item}) => {
    // console.log(item)
    return (
        <>
        <div className='mt-10 mb-10 '>
            <div className="card dark:bg-white bg-white-100 w-96 shadow-xl hover:scale-105 duration-100  text-black border border-black  ">
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {/* Shoes! */}
                        {item.name}
                        <div className="badge bg-blue-600 text-white">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline hover:bg-blue-600 cursor-pointer hover:text-white">${item.price}</div>
                        <div className="badge badge-outline hover:bg-blue-600 cursor-pointer hover:text-white">Buy Now</div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Cards
