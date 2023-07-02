import React, { useEffect, useState } from 'react'
import Chat from './Chat';
import { useDispatch,useSelector } from 'react-redux';
import { addChat } from '../utils/Chatslice';
import { RandomName, generateQuote } from '../utils/Links';



const ChatContainer = () => {
    const data=useSelector(s=>s.chat.messages);

    const dispatch=useDispatch()

    useEffect(()=>{

const timer=setInterval(() => {
    dispatch(addChat({
        name:RandomName(),
        message:generateQuote(),
    }))
}, 1000);


return function(){
    clearInterval(timer)
}

    },[dispatch])

//for own chat to add
    const [chat,setChat]=useState('')
    function addOwnChat(){
      dispatch(addChat({
        name:'Prakash',
        message:chat,
      }))
    }

    const [chatShow,setChatShow]=useState(true);
  return (
    <>
    
 
 <div className='flex gap-2 items-center'>
  <h1 className='mx-2 text-2xl cursor-pointer' onClick={function(){ return setChatShow(!chatShow)}}>Live chat</h1> 
{ chatShow?<span className='font-bold text-2xl' >&#8593;</span>:<span className='font-bold text-2xl' >&#8595;</span>}
 </div>
 
 { chatShow&&(
 <div className='border mt-2 h-[500px] overflow-y-scroll flex flex-col-reverse'>
  <div>
  {data?.map((e,i)=><Chat key={i} chat={e}/> )}
  </div>
 </div>
 )}

<div>
  <form className='mt-4 flex flex-wrap items-center justify-center gap-2' onSubmit={function(e){
e.preventDefault();
addOwnChat();

  }}>
    <input className='px-10 py-4 border-b-2 shadow-inner w-[100%] text-center outline-none text-black' type='text' placeholder='Say something' value={chat} onChange={function(e){
      setChat(e.target.value)
    }}/>
    <button className='border ml-2 bg-black text-white px-10 py-2 rounded hover:bg-slate-200 hover:text-black hover:rounded-md'>Add comment</button>
  </form>
</div>

    </>
  )
}

export default ChatContainer