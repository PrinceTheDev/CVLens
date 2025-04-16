import React from 'react'
import SignInImg from '../assets/signInImg.png'

const signIn = () => {
  return (
    <div className='flex flex-row'>

        {/* LHS container */}
        <div className='w-1/2 px-10 py-10 '>
        <h2 className='text-black font-semibold text-2xl text-center '> LOGO </h2>

        <div className='flex flex-col mt-6 text-center'>
            <h3 className='text-black font-semibold text-h2'> Hi, let’s get to know you </h3>
            <p className='text-grey font-normal text-p1'> Sign in or create a quick account to get started </p>
        </div>

        <button className='border-prycol w-full border py-3 px-8 rounded-sm text-prycol font-bold text-p1 mt-12'> Sign in with Google </button>

        <p className='text-prycol text-p1 font-normal mt-4 text-center'> or </p>

        <form action="" cl>
            <div className='flex flex-col gap-1'>
            <label htmlFor=" Name " className=''> Name </label>
            <input type="text" placeholder='Enter your name' className='border border-[#E3EAFE] py-3 px-2 rounded-sm mb-6 text-p2 text-normal text-grey' />
            </div>

            <div className='flex flex-col gap-1'>
            <label htmlFor=" Email " className=''> Email Address </label>
            <input type="text" placeholder='Enter your name' className='border border-[#E3EAFE] py-3 px-2 rounded-sm mb-6 text-p2 text-normal text-grey' />
            </div>

            <button className='bg-prycol text-white text-semibold text-p1 rounded-sm py-3 px-2 mt-4 w-full'> Continue </button>
            <p className='text-grey text-p1 font-normal text-center mt-6'> Already have an account? <span className='text-prycol'> Log in </span></p>

        </form>

        <p className='text-mdblack text-p1 font-normal mt-10 text-center'> By creating an account, you agree to our terms of use and privacy policy </p>


        </div>

        {/* RHS container */}

        <div className='w-1/2 bg-prycol relative py-10 px-4 h-screen'>
        <img src={SignInImg} alt="" className='absolute top-0 left-0 object-cover w-[20%}' />
        </div>

    </div>
  )
}

export default signIn