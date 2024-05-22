export const selectCars = (state) => state.cars.cars;

export const selectFilteredCars=({cars})=>{
    console.log("selector",cars)
    const carsList = cars.cars;
    const searchedBrand = cars.search;
    console.log("trazeno",cars.search);
    const filtered = carsList.filter((car) => car.brand.includes(searchedBrand));
    console.log(filtered);

    return filtered;
}

export const selectListOfSelectid=({cars})=>{return cars.selectidCars.length}
