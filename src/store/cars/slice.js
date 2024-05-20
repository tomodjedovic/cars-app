import { createSlice } from "@reduxjs/toolkit";
export const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    search: "",

  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setSearch: (state,action) =>{
      state.search = action.payload

    }
  },
});
export const { setCars,setSearch } = carSlice.actions;
export default carSlice.reducer;
