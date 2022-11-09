import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "/src/stroes/counter";
import semaReducer from "/src/stroes/sema";
export default configureStore({
    reducer:{
        counter:counterReducer,
        sema:semaReducer,
    }
})