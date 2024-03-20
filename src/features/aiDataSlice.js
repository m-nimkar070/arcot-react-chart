import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import aiData from '../ai-data.json'

//InitialState
const initialState = {
    dataReport:{
        isLoading:false,
        data:null,
        isError:false,
    },
}

// Thunk function for mocking api call , Try-catch should be used when making real api call for error handling
export const fetchData = createAsyncThunk("fetchData", async()=>{
    await new Promise((resolve) => setTimeout(resolve,1000) );
    return aiData;
})

// A piece/slice of store 
export const aiDataSlice = createSlice({
    name:'ai-data',
    initialState,
    extraReducers:(builer)=>{
        builer.addCase(fetchData.pending , (state,action) =>{
            state.isLoading = true;
        });
        builer.addCase(fetchData.fulfilled  , (state,action) =>{
            state.data =action.payload;
            state.isLoading = false;
        });
        builer.addCase(fetchData.rejected  , (state,action) =>{
            console.log("Something is wrong while fetching the data")
            state.isError = true;
        });
    }
})


export default aiDataSlice.reducer