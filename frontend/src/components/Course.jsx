import React, {useState, useEffect} from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Course = () => {
  const [book, setBook] = useState([])
  
  useEffect(() => {
    
    const getbook =async ()=>{
      try {
        const res =await axios.get('https://book-store-app-rouge.vercel.app/book');
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getbook()
  
    
  }, [])


  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredBooks = searchInput
    ? book.filter((b) =>
        b.section.toLowerCase().includes(searchInput.toLowerCase())
      )
    : book;
  
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

        <div className="form-control text-white mt-2">
            <input type="text" placeholder="Search for book"
            value={searchInput}
            onChange={handleSearchInput}
             className="bg-slate-300 text-black input input-bordered w-1/2 mx-auto" />
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1'>
          {/* {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))} */}

          {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => (
            <Cards item={item} key={item.id} />
          ))
        ) : (
          <div>No books found for this category</div>
        )}
        </div>
      </div>
    </>
  )
}

export default Course
