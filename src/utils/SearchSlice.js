import { createSlice } from "@reduxjs/toolkit";


const SearchSlice=createSlice({
    name:'search',
    initialState:{
        isVisible:true,
    },
    reducers:{
        setSearchBar(state,action){
state.isVisible=action.payload;
        },
        showSearchBar(state,action){
             state.isVisible=action.payload}
       
    }
})
export const {setSearchBar,showSearchBar}=SearchSlice.actions;

export default SearchSlice.reducer;