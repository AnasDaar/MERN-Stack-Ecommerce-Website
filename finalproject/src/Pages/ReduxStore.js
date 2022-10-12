import {configureStore} from "@reduxjs/toolkit";
import Cartreducer from "./CartSlice"

const store = configureStore({
    reducer: {cart : Cartreducer,
               }
})
export default store;