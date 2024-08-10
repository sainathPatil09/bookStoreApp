import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

import list from "../../public/list.json"
const FreeBook = () => {
    const filterData = list.filter((data) => data.category === "Free")
    // console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (
        <>

            <div className='p-6 max-w-screen-2xl container mx-auto  md:w-[85vw] '>
                <div className='space-y-5'>

                    <h2 className='text-2xl font-bold'>Free Offered Courses</h2>
                    <p className='text-lg'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, mollitia. consectetur adipisicing elit. Voluptates, esse?</p>
                </div>


                <div className="">
                    <Slider {...settings}>
                       {filterData.map((item)=>(
                        <Cards item={item} key={item.id}/> 
                       ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBook
