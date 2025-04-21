import React from 'react'
import SignInImg from '../assets/signInImg.png'

const emailOtp = () => {
  return (
    <div className='flex flex-row'>
    
            {/* LHS container */}
            <div className='w-1/2 px-10 py-10 '>
            <h2 className='text-black font-semibold text-2xl text-center '> LOGO </h2>
    
            <div className='flex flex-col mt-6 text-center'>
                <h3 className='text-black font-semibold text-h2'> Verify your email </h3>
                <p className='text-grey font-normal text-p1'> A 4-didgit OTP code has been sent to wun***mi@gmail.com. Enter it to continue </p>
            </div>
    
            
    
            
    
            <form action="" className="flex flex-col gap-2 w-full items-center">
            <div className="flex flex-row gap-6 w-full items-center justify-center py-10">
            <input type="text" inputMode="numeric" maxLength={1} autoFocus className="w-[5rem] h-[4rem] border border-[#E3EAFE] rounded-sm text-center text-p2 text-grey focus:outline-none focus:border-prycol" />
    
            <input type="text" inputMode="numeric" maxLength={1} autoFocus className="w-[5rem] h-[4rem]  border border-[#E3EAFE] rounded-sm text-center text-p2 text-grey focus:outline-none focus:border-prycol" />
    
            <input type="text" inputMode="numeric" maxLength={1} autoFocus className="w-[5rem] h-[4rem]  border border-[#E3EAFE] rounded-sm text-center text-p2 text-grey focus:outline-none focus:border-prycol" />

            <input type="text" inputMode="numeric" maxLength={1} autoFocus className="w-[5rem] h-[4rem]  border border-[#E3EAFE] rounded-sm text-center text-p2 text-grey focus:outline-none focus:border-prycol" />
  
            </div>

          <button className="bg-prycol text-white font-semibold text-p1 rounded-sm py-3 px-2 mt-4 w-full">
            Continue
          </button>

            <p className="text-grey text-p1 font-normal text-center mt-6">
              Did not get the code <span className="text-prycol cursor-pointer">Resend Code</span>
            </p>
          </form>


    
    
    
            </div>
    
            {/* RHS container */}
    
            {/* RHS container */}
      <div className="w-1/2 h-screen fixed right-0 top-0 bg-prycol px-4 py-10 z-10">
        <img src={SignInImg} alt="Sign In Visual" className="w-full h-full object-cover" />
      </div>
    
    
        </div>
  )
}

export default emailOtp