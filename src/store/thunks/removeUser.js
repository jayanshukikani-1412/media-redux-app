import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "http://localhost:3002/users"

const removerUser = createAsyncThunk('users/remove', async (user) => {
    const response = axios.delete(URL+`/${user.id}`)
    console.log(response);
    console.clear();
    return user;
});

export {removerUser};