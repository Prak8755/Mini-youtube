import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const ToggleShimmer = () => {
  return (
    <>
    <div className='flex flex-col fixed w-[100px] sm:w-[150px] ml-8 gap-10 mt-8 '>
   <Link to='/'> <i className="fa-solid fa-house text-2xl"></i></Link>
    <Link to='/library'><i className="fa-sharp fa-solid fa-film text-2xl"></i></Link>
    <Link to='notifications'><i className="fa-solid fa-bell text-2xl"></i></Link>
   <Link to='/music'> <i className="fa-solid fa-photo-film text-2xl"></i></Link>
      </div>
    </>
  )
}

const Slidebar = () => {

  const data=useSelector(s=>s.toggle.items);

  return data?<ToggleShimmer/>:(
    <>
    <div className=' w-[100px] sm:w-[220px]  h-[738px] overflow-scroll fixed'>
      <div>
       <div className='flex gap-5   ml-2 sm:ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer w-[300px] hover:text-black items-center sm:gap-10 sm:w-[200px]'>
       <i className="fa-solid fa-house"></i>
        <Link to='/' className='hidden sm:block'>Home</Link>
       </div>
       <div className='flex gap-5 mt-6 ml-2 sm:ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer  hover:text-black w-[300px] items-center sm:gap-10 sm:w-[200px]' >
       <i className="fa-sharp fa-solid fa-film"></i>
        <Link to='/shorts' className='hidden sm:block'>Shorts</Link>
       </div>
       <div className='flex gap-5 mt-6 ml-2 sm:ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer  hover:text-black w-[300px] items-center sm:gap-10 sm:w-[200px]'>
       <i className="fa-solid fa-bell"></i>
        <Link to='/notifications' className='hidden sm:block'>Notification</Link>
       </div>
{/*  */}
       <div className='hidden sm:block'>
       <div className=' flex gap-5 mt-6 ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer w-[300px]  hover:text-black items-center sm:gap-10 sm:w-[200px]'>
       <i className="fa-solid fa-photo-film"></i>
        <Link to='library' className='hidden sm:block'>Library</Link>
       </div>

       
       <div className='flex  gap-5 mt-6 ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer w-[300px]  hover:text-black items-center sm:gap-10 sm:w-[200px] '>
       <i className="fa-solid fa-video-slash"></i>
        <Link to='/history'>History</Link>
       </div>
       <div className='flex  gap-5 mt-6 ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer w-[300px]  hover:text-black items-center sm:gap-10 sm:w-[200px] '>
       <i className="fa-solid fa-music"></i>
       <Link to='/music'>Music</Link>
       </div>
       <div className='flex  gap-5 mt-6 ml-4 p-4  hover:bg-gray-200 hover:rounded-md hover:cursor-pointer w-[300px]  hover:text-black items-center sm:gap-10 sm:w-[200px] '>
       <i className="fa-solid fa-business-time"></i>
        <Link to='watchlater'>Watch later</Link>
       </div>
       <div className='flex  gap-5 mt-6 ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer w-[300px]   hover:text-black items-center sm:gap-10 sm:w-[200px] '>
       <i className="fa-solid fa-video"></i>
        <h3>Like videos</h3>
       </div> 
      

      <div>
        <h2 className='ml-4 font-bold mt-4'>More from you tube</h2>
        <div className='flex  gap-5 mt-6 ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer w-[300px]  hover:text-black items-center sm:gap-10 sm:w-[200px] '>
        <i className="fa-brands fa-youtube text-red-600"></i>
        <Link to='/watch'>Youtube Pro</Link>
       </div>
       <div className='flex  gap-5 mt-6 ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer w-[300px]  hover:text-black items-center sm:gap-10 sm:w-[200px] '>
       <i className="fa-regular fa-video text-red-600"></i>
        <h3>Youtube studio</h3>
       </div> 
       <div className='flex  gap-5 mt-6 ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer w-[300px]  hover:text-black items-center sm:gap-10 sm:w-[200px] '>
       <i className="fa-solid fa-person-circle-exclamation text-red-600"></i>
        <h3>Youtube music</h3>
       </div>  
       <div className='flex  gap-5 mt-6 ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer w-[300px]  hover:text-black items-center sm:gap-10 sm:w-[200px] '>
       <i className="fa-solid fa-music text-red-600"></i>
            <h3>Youtube Kids</h3>
       </div>
       <div className='flex  gap-5 mt-6 ml-4 p-4 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer w-[300px] hover:text-black items-center sm:gap-10 sm:w-[200px] '>
       <i className="fa-solid fa-video text-red-600  "></i>
        <h3 className=''>Youtube ads</h3>
       </div>
      </div>
      </div>
      </div>

    </div>
    </>
  )
}

export default Slidebar