import React from 'react'

const Analyze = () => {
  return (
    <div className='bg-[#eeeeee] items-center justify-center align-center flex'>
        <div className='bg-white rounded-lg mt-30 margin-auto w-[50%] px-10 py-10'>

        
        <h2 className='text-black font-semibold text-2xl text-center '> LOGO </h2>

        <div className='flex flex-col mt-6 text-center'>
            <h3 className='text-black font-semibold text-h2'> Analyze your resume </h3>
            <p className='text-grey font-normal text-p1'> Help us help you get a tailored CV for your dream job </p>
        </div>
       
            
        <form action="" className='mt-10' >
            <div className='flex flex-col gap-1'>
            <label htmlFor=" Name " className=''> Job Title </label>
            <input type="text" placeholder='Enter thr job title' className='border border-[#E3EAFE] py-3 px-2 rounded-sm mb-6 text-p2 text-normal text-grey' />
            </div>

            <div className='flex flex-col gap-1'>
            <label htmlFor=" Email " className=''> Years of Experience </label>
            <input type="select" placeholder='Select' className='border border-[#E3EAFE] py-3 px-2 rounded-sm mb-6 text-p2 text-normal text-grey' />
            </div>

            <div className='flex flex-col gap-1'>
            <label htmlFor=" Password " className=''> Job Requirement  </label>
            <input type="paragraph" placeholder='Enter job requirement' className='border border-[#E3EAFE] py-3 px-2 rounded-sm mb-6 text-p2 text-normal text-grey' />
            </div>

            <div className='flex flex-col gap-1'>
            <label htmlFor=" Password " className=''> Upload CV  </label>
            <input type="upload" placeholder='Upload your CV' className='border border-[#E3EAFE] py-3 px-2 rounded-sm mb-6 text-p2 text-normal text-grey' />
            </div>

            <button className='bg-prycol text-white text-semibold text-p1 rounded-sm py-3 px-2 mt-4 w-full'> Continue </button>
            <p className='text-grey text-p1 font-normal text-center mt-6'> Already have an account? <span className='text-prycol'> Log in </span></p>

        </form>

        </div>
    </div>
  )
}

export default Analyze