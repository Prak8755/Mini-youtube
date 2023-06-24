import { createSlice } from "@reduxjs/toolkit";

const toggleSlice=createSlice({
    name:'toggle',
    initialState:{
        items:false,
    },
    reducers:{
        toggleMenu:function (state,action){
             state.items=!state.items
        },
        closeMenu:function(state){
        state.items=!true
        }
    }
});


export const {toggleMenu,closeMenu}=toggleSlice.actions;
export default toggleSlice.reducer;
