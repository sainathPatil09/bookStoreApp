import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit =async (data) =>{
        const userInfo = {
            email : data.email,
            password : data.password
        }
        await axios.post('http://localhost:4001/user/login', userInfo)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('loggedin successfully');
                document.getElementById('my_modal_3').close()
                setTimeout(() => {
                    window.location.reload();
                }, 1000);

            }
            localStorage.setItem("User" , JSON.stringify(res.data.user))
        })
        .catch((err)=>{
            if(err.response){
                console.log(err)
                toast.error('Error : ' + err.response.data.message);
                setTimeout(() => {}, 1000);
            }
        })
    }
    return (
        <>
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}></button> */}
            <div>
                <dialog id="my_modal_3" className="modal z-50">
                    <div className="modal-box bg-slate-400 dark:text-black ">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById('my_modal_3').close()}>✕</Link>

                            <h3 className="font-bold text-lg">Login!</h3>
                            <div className='flex flex-col gap-1 mt-5 mb-5'>
                                <span>Email</span>
                                <input {...register("email", { required: true })}
                                    className='w-1/2 rounded-lg px-1 py-2  bg-white dark:text-black ' type="email" placeholder='Enter Your Email' />
                                {errors.email && <span className='text-red-600'>This field is required*</span>}
                            </div>
                            <div className='flex flex-col gap-1 mt-5 mb-5'>

                                <span>Password</span>
                                <input {...register("password", { required: true })} className='w-1/2 rounded-lg px-1 py-2 dark:text-black bg-white ' type="Password" placeholder='Enter Your Password' />
                                {errors.password && <span className='text-red-600'>This field is required*</span>}
                            </div>
                            <div className='flex justify-between'>
                                <button className="px-1 py-1 hover:bg-blue-600 border border-blue-600 rounded-xl cursor-pointer">
                                    Login
                                </button>


                                <p>Not Registered?{" "}
                                    <Link to='/signup'
                                        className='text-blue-800 cursor-pointer underline'>signup
                                    </Link>{" "}
                                </p>

                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login 
