import {createSlice} from "@reduxjs/toolkit";

export const counter=createSlice({
    name:"counter",
    initialState:{
        value:0,
        title:"Sema",
    },
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incrementByAmount:(state,action)=>{
            state.value+=action.payload;
        },
        changeTitle:(state,action)=>{
            state.title=action.payload;
        }
    }
})
export const {increment,decrement,incrementByAmount,changeTitle}=counter.actions
export default counter.reducer;