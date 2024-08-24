import React from 'react'
import toast from 'react-hot-toast'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c7a7153f-d6bd-457c-9514-285aac0d8c94");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          toast.success('Message sent successfully');
          setTimeout(() => {
              window.location.reload();
          }, 1000);
        }
      };
      

    return (
        <>
            <div className='p-6 container md:mx-auto  md:w-1/2 space-y-3 shadow-2xl border border-slate-400 rounded-lg ml-2 mr-2  '>
                <h1 className='text-4xl text-blue-600 font-bold'>Contact Us</h1>

                <form onSubmit={onSubmit} action="" className='gap-4 flex flex-col'>



                    <span>Name</span>
                    <input className='w-1/2 rounded-lg px-1 py-2  bg-white dark:text-black ' type="text" placeholder='Enter Your Name' name='name' required />
                    <span>Email</span>
                    <input className='w-1/2 rounded-lg px-1 py-2  bg-white dark:text-black ' type="email" placeholder='Enter Your Email' name='email' required />
                    <span>Message</span>
                    <textarea className='w-1/2 rounded-lg px-1 py-2  bg-white dark:text-black ' placeholder='Enter Your message' name='message' required />

                    <div>

                        <button className="px-1 py-1 hover:bg-blue-600 hover:text-white border border-blue-600 rounded-xl cursor-pointer">Submit</button>

                    </div>

                </form>
            </div>


        </>
    )
}

export default Contact
