import React, { useEffect,useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { setSearchBar } from '../utils/SearchSlice';
import SearchVideosCards from './SearchVideosCards'
import {Link} from 'react-router-dom';


const SearchVideos = () => {

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(setSearchBar(false))
      })

  let [searchParams]=useSearchParams();
  const query=searchParams.get("search_query");

 const [videoData,setVideoData]=useState([])



  useEffect(()=>{
    async function getSearchData(){
      const data=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyBHarb1vgOfnFgKvsGohh6wcJy7t2DxGJ0 `)
     const json=await data.json();
  setVideoData(json);
 
   }
   getSearchData()

  },[query])
 
  return (
    
    <>
    <div className='p-4 border w-full mt-20 flex items-center justify-center'>
      <div className='  w-[90%] m-auto'>
      {videoData?.items?.map((e,i)=><Link key={i} to={'/watch?v='+e.id.videoId}><SearchVideosCards data={e} /></Link>)}

      </div>
    </div>

    </>
  )
}

export default SearchVideos