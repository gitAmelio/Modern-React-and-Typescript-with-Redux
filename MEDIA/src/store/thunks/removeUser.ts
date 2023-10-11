import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pause } from "../../dev-only";

const removeUser = createAsyncThunk('users/remove', async (id: string) => {
  const response = await axios.delete(`http://localhost:3005/users/${id}`);

  await pause(1000);

  return response.data;
})

export { removeUser };