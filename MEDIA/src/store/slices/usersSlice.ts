import { SerializedError, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';
import { removeUser } from '../thunks/removeUser';

type User = {
  id: string;
  name: string;
}

export type UserState = {
  data: User[]
  isLoading: boolean;
  error: SerializedError | null;
}

const usersSlice = createSlice({
  name: 'users',
  initialState: { 
    data: [], 
    isLoading: false, 
    error: null 
  } as UserState,
  reducers: {},
  extraReducers(builder) {
    // fetchUser
    builder.addCase(fetchUsers.pending, (state, action)=>{
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action)=>{
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action)=>{
      state.data = action.payload;
      state.isLoading = false;
    });

    // addUser
    builder.addCase(addUser.pending, (state, action)=>{
      state.isLoading = true;
    });
    builder.addCase(addUser.rejected, (state, action)=>{
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(addUser.fulfilled, (state, action)=>{
      state.data.push(action.payload);
      state.isLoading = false;
    });

    // removeUser
    builder.addCase(removeUser.pending, (state, action)=>{
      state.isLoading = true;
    });
    builder.addCase(removeUser.rejected, (state, action)=>{
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(removeUser.fulfilled, (state, action)=>{
      state.isLoading = false;
      const index = state.data.findIndex(user=>user.id === action.payload)
      state.data.splice(index, 1);
    });
  }
})

export const usersRecuder = usersSlice.reducer