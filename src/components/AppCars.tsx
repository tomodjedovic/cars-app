import React, { useEffect, useState } from "react";
import carService from "../services/CarService";
import { useDispatch,useSelector } from "react-redux";
import { selectCars } from "../store/cars/selector";
import { setCars } from "../store/cars/slice";
import CarRow from "./CarRow";


export interface Car {
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
        <ul key={car.id}>
          <CarRow car={car}/>
        </ul>
      ))}
        </>
    )
};
export default AppCars;