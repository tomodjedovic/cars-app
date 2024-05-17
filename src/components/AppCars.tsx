import React, { useEffect, useState } from "react";
import carService from "../services/CarService";
import { useDispatch,useSelector } from "react-redux";
import { selectCars } from "../store/cars/selector";
import { setCars } from "../store/cars/slice";


interface Car {
  brand: "string";
  model: "string";
  year: 0;
  maxSpeed: 0;
  isAutomatic: true;
  engine: "string";
  numberOfDoors: 0;
  id: 0;
}


const AppCars:React.FC=()=>{
    const dispatch = useDispatch();
    const cars:Car[] = useSelector(selectCars);

    
    useEffect(()=>{
        async function fetchCars() {
            const carArr:Car[] = await carService.getAll();
            dispatch(setCars(carArr))
            
        }
        fetchCars()
    },[])

    
    return(
        <>
      {  cars.map((car)=>(
        <div key={car.id}>
            <h3>brand : {car.brand}</h3>
            <p>model : {car.model}</p>
            <p>godiste {car.year}</p>
            <p>max.brzina : {car.maxSpeed}</p>
            <p>motor : {car.engine}</p>
            <p>broj vrata : {car.numberOfDoors}</p>
            <p>id auta : {car.id}</p>

        </div>
      ))}
        </>
    )
};
export default AppCars;