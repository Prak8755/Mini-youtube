import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/toggleSlice'
import { useSearchParams } from 'react-router-dom'

import {  userIcon } from '../utils/Links';
import ChatContainer from './ChatContainer';
import Comments from './Comments'
import  { setSearchBar } from '../utils/SearchSlice';
import { useSelector } from 'react-redux';


const WatchContainer = () => {

  const [searchParams]=useSearchParams();


  const dispatch=useDispatch()
  
  // const status=useSelector(s=>s.search.isVisible);

  useEffect(()=>{
dispatch(closeMenu())

  },[])

  
  return (
    <> 
    <div className='absolute -z-10 w-full p-6 overflow-hidden md:flex md:gap-6 mt-24'>

      {/* video and comment div */}
   <div className='md:w-[60%]'>
   <iframe className='w-full h-[250px] sm:h-[400px] md:h-[500px]  cursor-pointer'   src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameBorder='0' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
   <h1 className='my-6  font-bold ' > Title is Not available for this video </h1>

   <div className='flex w-full gap-10 items-center  '>
    <img  className='h-6'alt='user' src={userIcon}></img>
    <div>
    <h1>Channel Title</h1>
    <p>5k subscribers</p>
    </div>
    <div>
      <button className='px-6 py-2 bg-black text-white rounded-md hover:bg-slate-200 hover:text-black hover:rounded-mdn'>Subscribe</button>
    </div>
   </div>

<div className='my-6'>
  <Comments/>
</div>
   </div>

{/*Livechat div  */}
<div className='border-4 rounded md:w-[40%]'>
<ChatContainer/>
</div>

    
      </div> 
    </>
    
  )


}

export default WatchContainer