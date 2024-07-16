import React from 'react'

const Cards = ({profile,names,designation,description}) => {
  return (
    <div>
        <div
      className="bg-gray-800 px-8 py-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex flex-col items-center">
        <img src= {profile} className="w-60 h-60 rounded-full object-cover" />
        <div className="mt-6 text-center">
          <p className="text-base text-gray-300 font-bold uppercase">{names}</p>
          <p className="text-base text-gray-300 font-bold uppercase">{designation}</p>
          <h3 className="text-white text-base mt-3 leading-relaxed">{description}</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards