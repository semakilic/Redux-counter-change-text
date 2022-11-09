import {createSlice} from "@reduxjs/toolkit";

export const sema=createSlice({
    name:"site",
    initialState: {
        dark: false,
        language: "tr",
    },
    reducers:{
        setDarkMode:(state)=>{
            state.dark=!state.dark; //Hangis tema seçili ise diğer temaya dönüş yapacak
        },
        setLanguage:(state,action)=>{
            state.language=action.payload; //language değişkenine action.payload değerini atayacak
        }
    }
})
export const {setDarkMode,setLanguage}=sema.actions
export default sema.reducer;