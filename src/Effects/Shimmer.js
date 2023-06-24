import React from 'react'

const Shimmer = () => {

    
  return (
    <>
       <div  className='absolute left-[80px] sm:left-[150px] p-10 flex flex-wrap items-center justify-center   '>
       {Array(20).fill('').map((e,i)=>
  
  <div key={i}>
  <div  className='h-[250px] w-[350px] bg-gray-200 m-6 rounded-md'></div>
  <div className='flex gap-4 ml-4'>
  <div className='w-[100px] h-[40px] rounded-full bg-slate-200' ></div>
  <div className='w-[230px] h-[40px] bg-slate-200 rounded-md'></div>
  </div>
  <div className='ml-20 mt-6 bg-gray-200 w-[280px] h-[40px] rounded-md'></div>
  </div>
  
  )}
 

    </div>
    </>
  )
}

export default Shimmer