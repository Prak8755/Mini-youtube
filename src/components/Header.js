import React, { useEffect, useState } from 'react'
import { HambergerLogo, Youtubelogo, searchLogo, userIcon } from '../utils/Links'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/toggleSlice';
import { Link ,Outlet} from 'react-router-dom';
import { setSearchBar } from '../utils/SearchSlice';


const Header = () => {

  

   const [search,setSearch]=useState('');
const [suggestion,setSuggestion]=useState([]);
// const [showSuggestion,setShowSuggestion]=useState(false);

useEffect(()=>{
const timer=setTimeout(() => {
   getData();
}, 300);

return function(){
   clearTimeout(timer)
}
},[search])

// async function getData(){
//    const data=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyC52TweZ1YkuyuMO4zom9Mq-ZTWNKBChDs`);
//    const json =await data.json();
//    setSuggestion(json?.items);
// }

//For dark and Light theme
const [theme,setTheme]=useState('light-theme');
const [showLight,setShowLight]=useState(true);

useEffect(()=>{
document.body.className=theme;
},[theme])

function toggleTheme(){
   theme==='light-theme'?setTheme('dark-theme'):setTheme('light-theme');
   setShowLight(!showLight)
}

async function getData(){
   const data=await fetch('https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+search);
   const json =await data.json();
   setSuggestion(json[1]);
}

   const dispatch=useDispatch();
   function toggle(){
      dispatch(toggleMenu())
   }
const status=useSelector(s=>s.search.isVisible);


  return (
    <>
    <div className='fixed top-0 bg-white w-full'>
        <div className=' flex justify-between items-center p-2 sm:p-4 md:pd-6  '>
         <div className='flex gap-2'>
            <img alt='toggle' src={HambergerLogo} className='w-4 sm:w-8 cursor-pointer' onClick={()=>toggle()}/>
            <Link to='/'><img alt='logo'src={Youtubelogo} className='w-14 sm:w-24'/></Link>
         </div>
         <div className='relative'>
         <div className='flex items-center'>
            <input type='text' className='border border-gray-500 rounded-l-3xl w-[130px] sm:w-[300px] md:w-[500px] h-6 sm:h-8 md:h-10 shadow-md text-center ' value={search} onChange={function(e){setSearch(e.target.value)}} onClick={function(){dispatch(setSearchBar())}}  />
            <button className=' shadow-md border border-l-0 bg-slate-50 border-gray-500 rounded-r-3xl px-2 sm:px-6 h-6 sm:h-8 md:h-10'><img alt='searchLogo'src={searchLogo} className='w-4'/></button>
         </div>
        {/*  */}

       {status&& <div className='w-[130px] sm:w-[300px] md:w-[500px] mt-2 shadow-md rounded-2xl bg-white absolute'>
            <ul className='list-none font-sans'>
      {suggestion?.map((e,i)=><Link to={'/watch?v='+e.id} key={i}><h1 className='ml-4 shadow-md'>{e}</h1></Link>)}
      
            </ul>
         </div>}
         {/*  */}
         </div>
         <div className='flex items-center gap-6'>

       {showLight? <i className="fa-solid cursor-pointer text-2xl fa-moon " onClick={()=>toggleTheme()}></i>: <i className="fa-solid fa-sun cursor-pointer text-red-600 text-2xl"  onClick={()=>toggleTheme()}></i> }
          <img alt='userIcon' src={userIcon} className='w-8'/>
           
         </div>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Header