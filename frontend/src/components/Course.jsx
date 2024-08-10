import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'


const Course = () => {
  return (
    <>
      <div className=' p-6 max-w-screen-2xl container mx-auto  md:w-[85vw] ' >
        <div className='mt-20 justify-center items-center text-center space-y-5'>
          <h1 className=' text-3xl md:text-4xl '>We're delighted to have you <span className='text-blue-600'> Here : )</span></h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia accusamus voluptate voluptatem nemo ut assumenda eaque dignissimos, adipisci impedit officiis, ex nostrum nulla vitae tempora consequatur magnam id aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio similique voluptate eos eum, ipsum laborum reprehenderit ad modi eveniet ipsa molestias tempora repudiandae ea rerum amet, ratione alias sequi! Consectetur
          </p>
        <Link to='/'>
          <button className="btn btn-outline border-blue-600  bg-blue-600">Back</button>
        </Link>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1'>
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course
