import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { pause } from "../../dev-only";

const addUser = createAsyncThunk('users/add', async ( ) =>{
    const response = await axios.post('http://localhost:3005/users',{
      name: faker.person.fullName()
    })

    // DEV ONLY!!!
    await pause(1000)

    return response.data;   
})

export {addUser}; 