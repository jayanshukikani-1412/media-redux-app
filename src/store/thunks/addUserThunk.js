import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const URL = "http://localhost:3002/users"

const addUser = createAsyncThunk('users/add', async () => {
    const response = await axios.post(URL, {
        name: faker.name.fullName()
    })

    return response.data;
})

export {addUser};