import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    search: "",
    selectidCars:[],

  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setSearch: (state,action) =>{
      state.search = action.payload

    },
    selectDeselect: (state,action)=>{
      const alredySelected = state.selectidCars.filter(
        (car)=>car.id===action.payload.id
        ).length;
        if(!alredySelected){
          state.selectidCars = [...state.selectidCars,action.payload];
        }else{
          state.selectidCars = state.selectidCars.filter((car)=>
            car.id!==action.payload.id
          );
        };
    },
  },
});
export const { setCars,setSearch,selectDeselect } = carSlice.actions;
export default carSlice.reducer;
