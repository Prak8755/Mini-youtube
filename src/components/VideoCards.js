import React from 'react'

const VideoCards = (props) => {


  return (
    <>
     <div className='m-4 w-[350px]'>
      <img className='w-54 hover:rounded-none rounded-lg' alt=''src={props?.data?.snippet?.thumbnails?.medium?.url}/>
      <div className='flex gap-4 mt-4'>
        <img className='h-6' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbU49DD_iYcjSUEXG-Oy7POjJzaMn1GYEZg&usqp=CAU'/>
        <div className=''>
          <h2 className='font-bold text'>{props?.data?.snippet?.channelTitle}</h2>
          <p className='text-gray-600'>{props?.data?.snippet?.title}</p>
          <p className='text-gray-600'>Views :{props?.data?.statistics?.viewCount } </p>
          <p className='text-gray-600'>likes: {props?.data?.statistics?.likeCount}</p>
        </div>
      </div>
    </div>
    </>
  )
}



export default VideoCards