import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    search: "",
    selectedCars:[],

  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setSearch: (state,action) => {
      state.search = action.payload

    },
    selectDeselect: (state,action) => {
      const alredySelected = state.selectedCars.filter(
        (car)=>car.id===action.payload.id
        ).length;
        if(!alredySelected){
          state.selectedCars = [...state.selectedCars,action.payload];
        }else{
          state.selectedCars = state.selectedCars.filter((car) =>
            car.id!==action.payload.id
          );
        };
    },

    selectAll: (state) => {
      state.selectedCars = state.cars;
    },

    deselectAll: (state) => {
      state.selectedCars = [];
    },
  },
});
export const { setCars,setSearch,selectDeselect,selectAll,deselectAll } = carSlice.actions;
export default carSlice.reducer;
