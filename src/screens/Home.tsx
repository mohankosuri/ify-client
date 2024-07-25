import React from 'react'
import Videocomponent from '../components/Videocomponent'
import AnimatedTextWord from '../components/AnimatedTextWord'

const Home = () => {
  return (
    <div>
       <div className='flex justify-center items-center text-red-400 text-2xl font-mono m-[50px] p-[50px]'>
       <AnimatedTextWord text="WellCome to IFY download" />
       </div>
       <div> <Videocomponent/></div>
    </div>
  )
}

export default Home