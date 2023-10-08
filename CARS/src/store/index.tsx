import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, searchChange, addCar, removeCar } from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";


const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer
  }
})

export { store, searchChange, addCar, removeCar, changeCost, changeName };
export type RootState = ReturnType<typeof store.getState>;