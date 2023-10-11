import { configureStore } from "@reduxjs/toolkit";
import { usersRecuder } from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    users: usersRecuder
  }
})

export {store};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';