import gptSlice from "./gptSlice";
import moviesSlice from "./moviesSlice";
import userSlice from "./userSlice";

import { configureStore } from "@reduxjs/toolkit"

const appstore =configureStore({
    reducer:{
       user:userSlice,
       movies:moviesSlice,
       gpt:gptSlice
    }
})

export default appstore;