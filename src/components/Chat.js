import React from 'react'
import { chatUser } from '../utils/Links';


const Chat = ({chat}) => {
  const {name,message}=chat
  return (
    <>
     <div className='my-2 p-2 '>
    <div className='flex items-center gap-2'>
    <img  className='w-6 my-2'alt='user' src={chatUser}/>
   <h1 className='font-bold text-xl text-gray-400'>{name}</h1>
    </div>
   <p className='ml-6'>{message}</p>
  </div>
    </>
  )
}

export default Chat