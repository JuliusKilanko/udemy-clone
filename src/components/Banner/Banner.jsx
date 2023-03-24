import React from 'react'
import '../Banner/Banner.css'
import { useNavigate } from 'react-router-dom'

function Banner() {
  const ITCourses = useNavigate();

  return (
    <div>
        <div className='banner-design items-center px-10'>
            <div className='w-[400px] bg-white/90 h-fit mt-[-80px] py-10 px-8 text-left customDesign'>
                <h1 className="text-3xl font-bold w-[300px] text-left">Prep for your IT certificate</h1>
                <p className="py-4 text-left">Explore a future in IT. Start learning toward AWS certification, CompTIA A+ certification, and more.</p>
                <button className='text-white bg-black py-3 px-20'onClick={() => ITCourses('ITCourses')}>Expore Course</button>
            </div>
        </div>
    </div>
  )
}

export default Banner