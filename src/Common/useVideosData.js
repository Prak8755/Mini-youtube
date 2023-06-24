
import { useState,useEffect } from 'react';
import { You_Tube_Api } from '../utils/Links';

const useVideosData = () => {

    const [videos,setVideos]=useState([])

  useEffect(()=>{
getData();
  },[])

async function getData(){
  const data=await fetch(You_Tube_Api);
  const json =await data.json();
  setVideos(json?.items)
}
  return videos
  
}

export default useVideosData