import React, { useEffect, useState } from "react";
import carService from "../services/CarService";
import { useDispatch,useSelector } from "react-redux";
import {selectFilteredCars, selectListOfSelectid } from "../store/cars/selector";
import slice, { setCars,selectDeselect } from "../store/cars/slice";
import CarRow from "./CarRow";


export interface Car {
  brand: string;
  model: string;
  year: number;
  maxSpeed: number;
  isAutomatic: true|false;
  engine: string;
  numberOfDoors: number;
  id: number;
}


const AppCars:React.FC=()=>{
    
    const dispatch = useDispatch();
    const cars:Car[] = useSelector(selectFilteredCars);
    const numberOfSelect = useSelector(selectListOfSelectid);

    const handleSelect=(car:Car)=>{
     console.log(car);
     dispatch(selectDeselect(car));
     
    };
    
    useEffect(()=>{
       async function fetchCars() {
            const carArr:Car[] = await carService.getAll();
            dispatch(setCars(carArr))
            
        }
        fetchCars()
    },[])

    
    return(
        <>
        <span>br.selektovanih kola : {numberOfSelect}</span>
      {  cars.map((car)=>(
        <ul key={car.id}>
          <CarRow 
          select={handleSelect} car={car}/>
        </ul>
        
      ))}
        </>
    )
};
export default AppCars;