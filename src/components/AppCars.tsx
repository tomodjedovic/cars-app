import React, { useEffect, useState } from "react";
import carService from "../services/CarService";

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
    const [cars,setCars]=useState<Car[]>([]);
    useEffect(()=>{
        async function fetchCars() {
            const carArr = carService.getAll();
            console.log(carArr);
        }
        fetchCars()
    },[])

    
    return(
        <div>
        </div>
    )
};
export default AppCars;