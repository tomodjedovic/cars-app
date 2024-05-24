export const selectCars = (state) => state.cars.cars;

export const selectFilteredCars=({cars})=>{
    console.log("selector",cars)
    const carsList = cars.cars;
    const searchedBrand = cars.search;
    const filtered = carsList.filter((car) => car.brand.includes(searchedBrand));
    return filtered;
}
export const selectNumberOfSelectid = ({cars}) => {return cars.selectedCars.length};
