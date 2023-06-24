import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import Chatslice from "./Chatslice";
import commentSlice from "./commentSlice";
import SearchSlice from "./SearchSlice";


const Store=configureStore({
   reducer:{
      toggle:toggleSlice,
      chat:Chatslice,
      comment:commentSlice,
      search:SearchSlice,
   }
     
})

export default Store;