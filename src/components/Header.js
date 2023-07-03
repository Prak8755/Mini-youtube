import React, { useEffect, useState } from 'react'
import { HambergerLogo, Youtubelogo, searchLogo, userIcon } from '../utils/Links'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/toggleSlice';
import { Link ,Outlet, useNavigate} from 'react-router-dom';
import  { showSearchBar } from '../utils/SearchSlice';


const Header = () => {

 const navigate=useNavigate();


   const [search,setSearch]=useState('');
const [suggestion,setSuggestion]=useState([]);
// const [showSuggestion,setShowSuggestion]=useState(false);

useEffect(()=>{
const timer=setTimeout(() => {
   async function getData(){
      const data=await fetch('https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+search);
      const json =await data.json();
      setSuggestion(json[1]);
   }
   getData()
}, 300);
return function(){
   clearTimeout(timer)
}
},[search])



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



   const dispatch=useDispatch();

   function toggle(){
      dispatch(toggleMenu())
   }
const status=useSelector(s=>s.search.isVisible);


  return (
    <>
    <div className='fixed top-0 bg-white w-full'>
        <div className=' flex justify-between items-center px-4 py-4 gap-4'>
         <div className='flex gap-2'>
            <img alt='toggle' src={HambergerLogo} className='w-6 sm:w-8 cursor-pointer' onClick={()=>toggle()}/>
            <Link to='/'><img alt='logo'src={Youtubelogo} className='w-16 sm:w-24'/></Link>
         </div>
         <div className='relative'>
         <div className='flex items-center'>
            <form className='flex justify-center items-center' onSubmit={function(e){e.preventDefault(); navigate('/results/?search_query='+search);}}>
               <input type='text' className='border border-gray-500 rounded-l-3xl w-[130px] sm:w-[300px] md:w-[400px] xl:w-[500px] h-6 sm:h-8 md:h-10 shadow-md text-center ' value={search} onChange={function(e){setSearch(e.target.value);}}  onFocus={function(){dispatch(showSearchBar(true))}}   /> 
               <Link to={'/results/?search_query='+search}> <button className=' shadow-md border border-l-0 my-1 bg-slate-50 border-gray-500 rounded-r-3xl px-2 sm:px-6 h-6 sm:h-8 md:h-10' onClick={function(e){setSearch(e.target.value='')}}><img alt='searchLogo'src={searchLogo} className='w-4'/></button></Link>
             </form>
         </div>
        {/*  */}

       {status&& <div className='w-[130px] sm:w-[300px] md:w-[500px] mt-2 shadow-md rounded-2xl bg-white absolute'>
            <ul className='list-none font-sans'>
      {suggestion?.map((e,i)=><Link to={'/results/?search_query='+search} key={i}><h1 className='ml-4 shadow-md'>{e}</h1></Link>)}
      
            </ul>
         </div>}
         {/*  */}
         </div>
         <div className='flex items-center gap-2 sm:sm-6'>

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