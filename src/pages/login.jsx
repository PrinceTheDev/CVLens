import React from 'react'
import SignInImg from '../assets/signInImg.png'

const login = () => {
  return (
    <div className='flex flex-row'>

        {/* LHS container */}
        <div className='w-1/2 px-10 py-10 '>
        <h2 className='text-black font-semibold text-2xl text-center '> LOGO </h2>

        <div className='flex flex-col mt-6 text-center'>
            <h3 className='text-black font-semibold text-h2'> Welcome back </h3>
            <p className='text-grey font-normal text-p1'> Log in to your account to continue </p>
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

            <div className='flex flex-col gap-1'>
            <div className='flex flex-row justify-between'>
            <label htmlFor=" Password " className=''> Password  </label>
            <p className='text-p2 font-medium text-prycol'> Forgot Password?</p>
            </div>
            <input type="password" placeholder='Enter password' className='border border-[#E3EAFE] py-3 px-2 rounded-sm mb-6 text-p2 text-normal text-grey' />
            </div>

            <button className='bg-prycol text-white text-semibold text-p1 rounded-sm py-3 px-2 mt-4 w-full'> Continue </button>
            <p className='text-grey text-p1 font-normal text-center mt-6'> Do not have an account? <span className='text-prycol'> Sign up </span></p>

        </form>

        <p className='text-mdblack text-p1 font-normal mt-10 text-center'> By creating an account, you agree to our terms of use and privacy policy </p>


        </div>

        {/* RHS container */}

        {/* RHS container */}
      <div className="w-1/2 h-screen fixed right-0 top-0 bg-prycol px-4 py-10 z-10">
        <img src={SignInImg} alt="Sign In Visual" className="w-full h-full object-cover" />
      </div>
    

    </div>
  )
}

export default login