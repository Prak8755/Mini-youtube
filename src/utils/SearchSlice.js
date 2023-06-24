import { createSlice } from "@reduxjs/toolkit";
import { searchLogo } from "./Links";


const SearchSlice=createSlice({
    name:'search',
    initialState:{
        isVisible:false,
    },
    reducers:{
        setSearchBar(state,action){
state.isVisible=!state.isVisible
        }
    }
})
export const {setSearchBar}=SearchSlice.actions;

export default SearchSlice.reducer;