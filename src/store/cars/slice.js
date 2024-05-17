import { createSlice } from "@reduxjs/toolkit";
export const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    singleCar: {},
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
  },
});
export const { setCars } = carSlice.actions;
export default carSlice.reducer;
