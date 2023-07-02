import { createSlice } from '@reduxjs/toolkit'

const Chatslice=createSlice({
name:'chat',
initialState:{
    messages:[]
},
reducers:{
    addChat:(state,action)=>{
    state.messages.splice(10,1)
    state.messages.push(action.payload);
  
    }
   
}

})

export const {addChat}=Chatslice.actions;

export default Chatslice.reducer;
