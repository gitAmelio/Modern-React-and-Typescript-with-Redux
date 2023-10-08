import { createSlice, nanoid } from '@reduxjs/toolkit';

export type Car = {
  id: string;
  name: string;
  cost: number;
}

type CarsState = {
  data: Car[];
  searchTerm: string;
}

const carsSlice = createSlice({
  name: 'cars',
  initialState: {data: [], searchTerm: ''} as CarsState,
  reducers: {
    addCar: (state, action) => {
      const car = {...action.payload, id: nanoid()}
      console.log(car);
      state.data.push( car );
    },
    removeCar: (state, action) => {
      const updated = state.data.filter(car => car.id !== action.payload);
      state.data = updated;
    },
    searchChange: (state, action) => {
      state.searchTerm = action.payload || '';
    }
  }
})

export const carsReducer = carsSlice.reducer;
export const { addCar, removeCar, searchChange } = carsSlice.actions;