import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUserThunk";
import { removerUser } from "../thunks/removeUser";

const usersSlice = createSlice({
    name:'users',
    initialState:{
        isLoading: false,
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(addUser.pending,(state,action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled,(state,action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(removerUser.pending,(state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(removerUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = state.data.filter((user) => {
                return user.id !== action.payload.id;
            })
        });
        builder.addCase(removerUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error;
        });
    }
})

export const usersReducer = usersSlice.reducer;
