import React from 'react'
import Slidebar from './Slidebar';

import { Outlet } from 'react-router-dom';
import Maincontiner from './Maincontiner';

const Body= () => {
  return (
   <>
<div className='mt-20 relative -z-10  '>
    <Slidebar className=''/>
    <Maincontiner/>
</div>
   </>
  )
}

export default Body;
