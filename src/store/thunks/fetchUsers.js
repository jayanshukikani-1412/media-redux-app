import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'http://localhost:3002/users';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get(URL);

    // Development Purpose Only
    await pause(1000);
    return response.data;
});

// Development Purpose Only
const pause = (durations) => {
    return new Promise((resolve)=> {
        setTimeout(resolve, durations);
    })
}

export {fetchUsers};