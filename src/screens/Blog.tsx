import React from 'react'
import Dropdown from '../components/Dropdown'
import AnimatedTextWord from '../components/AnimatedTextWord'

const Blog = () => {
  return (
    <div className='bg-black text-white h-screen flex justify-center items-center text-[100px]'>
         <div className='tracking-widest font-[100px]'><AnimatedTextWord text="This is Blog"/></div>
    </div>
  )
}

export default Blog