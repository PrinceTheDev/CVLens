import React from 'react'
import Nav from '../components/nav'
import HeroBg from '../assets/hero-bg.png'

const landingPage = () => {
  return (
    <div className='w-full relative h-screen align-center justify-center item-center  '>
      <img src={HeroBg} alt="" className='absolute top-0 left-0 w-full h-full object-cover ' />
        <Nav/>

        <div className=' relative flex flex-col  item-center w-[65%] font-primary  mx-auto py-20'>
            <h1 className='text-white text-h1 text-center font-bold mb-4'> Transform your Resume to land your dream job </h1>
            <p className='text-white text-p1 text-center font-normal mb-6'> Get insights on your resume tailored to the role you're aiming for, just like a friend in HR would tell you </p>
            <button className='bg-white text-p1 font-semibold px-8 py-2.5 rounded-xl text-prycol w-fit mx-auto'> Analyze CV</button>
        </div>
    </div>
  )
}

export default landingPage