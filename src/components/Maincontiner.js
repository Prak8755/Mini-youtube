
import VideoCards from './VideoCards';

import { Link } from 'react-router-dom';
import useVideosData from '../Common/useVideosData';
import Shimmer from '../Effects/Shimmer';

const Maincontiner = () => {


  const videos=useVideosData();
  
  return(videos.length===0)?<Shimmer/>:(
   <>
   <div className='absolute left-[80px] sm:left-[170px] p-4 flex flex-wrap items-center justify-center  '>
 
 {videos.map((e,i)=> <Link key={e.id} to={'/watch?v='+e.id}><VideoCards  data={e}/></Link>)}
   
  </div>
   </>
  )
}

export default Maincontiner;
