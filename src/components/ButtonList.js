import React from 'react'

const ButtonList = () => {
  return (
    <div className='mt-4 sm:ml-[10px] bg-blue-400 fixed '>
       <div className='flex gap-2 sm:gap-8 md:gap-12'>
       <button className='px-2  sm:px-3 sm:py-1 md:px-8  rounded-md hover:text-white hover:bg-black  bg-gray-200'>All</button>
       <button className='px-2  sm:px-3 sm:py-1 md:px-8  rounded-md hover:text-white hover:bg-black  bg-gray-200'>Live</button>
       <button className='px-2  sm:px-3 sm:py-1 md:px-8  rounded-md hover:text-white hover:bg-black  bg-gray-200'>Music</button>
       <button className='px-2  sm:px-3 sm:py-1 md:px-8  rounded-md hover:text-white hover:bg-black  bg-gray-200'>Lectures</button>
       <button className='px-2  sm:px-3 sm:py-1 md:px-8  rounded-md hover:text-white hover:bg-black  bg-gray-200'>Sports</button>
       <button className='px-2  sm:px-3 sm:py-1 md:px-8  rounded-md hover:text-white hover:bg-black  bg-gray-200'>Chill out </button>
       </div>
    </div>
  )
}

export default ButtonList