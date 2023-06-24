import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../utils/commentSlice';


// const commentsData=[
//     {
//         name:'Prakash',
//         comment:'hello how are you doing',
//         reply:[
//             {
//                 name:'Dipu',
//                 comment:'fine bro where are you',
//                 reply:[
//                     {
//                         name:'Prakash',
//                         comment:'i am in Delhi right now',
//                         reply:[
//                             {
//                                 name:'Rohit',
//                                 comment:'Wow when did yo go to Delhi ?',
//                                 reply:[
//                                     {
//                                         name:'Prakash',
//                                         comment:'its been 3 months ,Rohit'
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
            
         
//         ]
//     },
//     {
//       name:'Shikhar',
//       comment:'This video is Amazing'
//     },
//     {
//         name:'Bhanu',
//         comment:'yes man He is so cool , with such amazing power',
//         reply:[
//             {
//                 name:'Shobit',
//                 comment:'He will bring more such videos Bhanu'
//             }
//         ]
//     },
//     {
//    name:'Mukesh',
//    comment:'I have subscribe to your channel already.'
//     }
// ]
// let show,setShow;


// function CommentsShow({data}){

// const {name,comment}=data;
// if(!show) return null;
// return(
//     <>
//     <div className='my-6 mx-4' >
//         <div className='flex items-center gap-2'><i className="fa-solid fa-user"></i>
//         <h1 className='text-gray-900 font-bold font-sans'>{name}</h1>
//         </div>
      
//         <h2>{comment}</h2>
       
//     </div>
//     </>
// )
// }

// function CommentsList({comments}){
    
//     return comments?.map((e,i)=><div key={i}> 
//     <CommentsShow data={e}/>
//     <div className='mx-10'>
//         <CommentsList comments={e.reply}/>
//     </div>
//     </div>)
// }

// const Comments = () => {
//      [show,setShow]=useState(false);

//   return (
//     <>
//          <h1 className='text-3xl'>Comments</h1>
//          <input type='text' placeholder='add a comment' className='mt-4  cursor-pointer w-full rounded-md border-b-2 focus:none'/>
//          <button className=' mt-4 px-10 py-2 hover:bg-slate-300 hover:rounded-md' onClick={function(){
//             setShow(!show)
//          }}>View Replies</button>
//          <h1>Comment</h1>
// <CommentsList comments={commentsData}/>
    
//     </>
//   )
// }



const Comments=function(){
const [comment,setComment]=useState('');
const data=useSelector(s=>s.comment.comments);

const dispatch=useDispatch()
    return (
        <>
        <h1 className='text-3xl'>Comments</h1>
        <input type='text' placeholder='add a comment' className='mt-4  cursor-pointer w-full rounded-md border-b-2 outline-none text-center' value={comment} onChange={function(e){setComment(e.target.value)}} onBlur={function(e){e.target.value=''}}/>
        <button className=' mt-4 px-10 py-2 hover:bg-slate-200 hover:text-black hover:rounded-md font-bold' onClick={function(){
            dispatch(addComment({name:'Prakash',com:comment}));
            setComment('')
            }}>Add Comments</button>
     {data?.map((e,i)=><CommentDisplay key={i} data={e}/>)}
        </>
    )
}
function CommentDisplay({data}){
    const {name,com}=data;
        return(
            <>
            <div className='shadow-md m-8'>
            <h1 className='font-bold' >{name}</h1>
            <h2>{com}</h2> 
            </div>
            </>
        )
    }
export default Comments