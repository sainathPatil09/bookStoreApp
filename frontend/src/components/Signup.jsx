import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast'


const Signup = () => {
    
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) =>{
        // console.log(data)
        const userInfo = {
            fullname : data.fullname,
            email : data.email,
            password : data.password
        }
        await axios.post('https://book-store-app-rouge.vercel.app/user/signup', userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('signup successfully');
                navigate(from, {replace:true});
                setTimeout(() => {
                    window.location.reload()
                }, 1000);

            }
            localStorage.setItem("User" , JSON.stringify(res.data.user))

        })
        .catch((err)=>{
            if(err.response){
                console.log(err)
                toast.error('Error : ' + err.response.data.message);
            }
        })
    } 
    return (
        <>
            {/* <div className='flex justify-center items-center bg-slate-900 min-h-screen'> */}

            <div className=" flex justify-center items-center bg-slate-900 min-h-screen">
                <div className='w-[600px]'>


                    <div className="modal-box  p-5 rounded-xl bg-slate-400 dark:text-black  ">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className='flex flex-col gap-1 mt-5 mb-5'>
                                <span>Name</span>
                                <input {...register("fullname", { required: true })} className='w-1/2 rounded-lg px-1 py-2  bg-white dark:text-black ' type="text" placeholder='Enter Your Name' />
                                {errors.fullname && <span className='text-red-600'>This field is required*</span>}
                            </div>
                            <div className='flex flex-col gap-1 mt-5 mb-5'>

                                <span>Email</span>
                                <input {...register("email", { required: true })} className='w-1/2 rounded-lg px-1 py-2  bg-white dark:text-black ' type="email" placeholder='Enter Your Email' />
                                {errors.email && <span className='text-red-600'>This field is required*</span>}
                            </div>
                            <div className='flex flex-col gap-1 mt-5 mb-5'>
                                <span>Password</span>
                                <input {...register("password", { required: true })} className='w-1/2 rounded-lg px-1 py-2 dark:text-black bg-white ' type="Password" placeholder='Enter Your Password' />
                                {errors.password && <span className='text-red-600'>This field is required*</span>}
                            </div>

                            <div className='flex justify-between'>
                                <button className="px-1 py-1 hover:bg-blue-600 border border-blue-600 rounded-xl cursor-pointer">Signup  </button>

                                <p>Already have Account?{" "}

                                    <button
                                        onClick={() => document.getElementById('my_modal_3').showModal()} className="text-blue-600 underline cursor-pointer">
                                        Login
                                    </button>


                                    <Login />
                                </p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Signup
