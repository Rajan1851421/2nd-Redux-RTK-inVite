import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const ShowTodos = createAsyncThunk("ShowTodos", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const TodoDetails = createSlice({
    name: 'TodoDetails',
    initialState: {
        Todos: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {

            builder
            .addCase(ShowTodos.pending,(state)=>{
                state.loading= true
            })
            .addCase(ShowTodos.fulfilled,(state,action)=>{
                state.loading= false
                state.Todos=action.payload
            })
            .addCase(ShowTodos.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload;
            })


    }
})
export default TodoDetails.reducer;