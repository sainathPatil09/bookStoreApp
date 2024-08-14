import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("User")
            toast.success("Logout Successfully");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error("Error :" + error.message);
            setTimeout(() => {}, 1000);
        }
    }
    return (
        <>
            <button onClick={handleLogout} className='px-3 py-2 bg-red-500 rounded-lg text-white cursor-pointer'>Logout</button>
        </>
    )
}

export default Logout
