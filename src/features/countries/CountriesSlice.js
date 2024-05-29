import { createSlice } from '@reduxjs/toolkit'
const initialState={
    countries:[]

}
export var countriesSlice=createSlice({
    name:"countries",
    initialState,
    reducers:{
        updateCoutries:(state,action)=>{
            state.countries=action.payload
        },
        // dec:(state)=>{
        //     state.count--;
        // },
        // reset:(state)=>{
        //     state.count=0
        // }
    }
})
export var{updateCoutries}=countriesSlice.actions;
export default countriesSlice.reducer