import React from 'react'

const SearchVideosCards = ({data}) => {
    console.log(data?.snippet?.description)
  return (
    <>
    
    <div className='flex flex-col sm:flex-row overflow-hidden items-center justify-center sm:justify-normal sm:items-stretch m-6 w-full gap-2'>
          
          <img src={data?.snippet?.thumbnails?.medium?.url} className='h-[180px] w-[350px] sm:w-[400px] sm:h-[200px] md:w-[500px] md:h-[300px] hover:rounded-lg' alt='img' />
          
          <div className='h-[150px] w-[300px] sm:w-[800px]'>
            <h1 className=' sm:text-2xl font-bold'>{data?.snippet?.title} </h1>
            <p className='my-2'>2.3 Milllion view </p>
            <p className='my-2'>{data?.snippet?.channelTitle}</p>
            <p className='my-2'>{data?.snippet?.description}</p>
          </div>
          </div>
    </>
  )
}

export default SearchVideosCards