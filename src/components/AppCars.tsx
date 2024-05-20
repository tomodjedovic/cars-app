import React, { useEffect, useState } from "react";
import carService from "../services/CarService";


 export interface Car {
  brand: string;
  model: string;
  year: number;
  maxSpeed: number;
  isAutomatic: false|true;
  engine: string;
  numberOfDoors: number;
  id: number;
}


const AppCars:React.FC=()=>{
    const [cars,setCars]=useState<Car[]>([]);
    useEffect(()=>{
        async function fetchCars() {
            const carArr =await carService.getAll();
            setCars(carArr);
        }
        fetchCars()
    },[])

    
    return(
        <div className="cars-list">
          {cars.map((car)=>(
            
          <div className="single-card" key={car.id}>
            <h3>Marka : {car.brand}</h3>
            <p>Model : {car.model}</p>
            <p>Year : {car.year}</p>
            <p>Max Speed : {car.maxSpeed}</p>
            <p>Engine : {car.engine}</p>
            <p>Gearbox : {car.isAutomatic}</p>
            <p>Number of doors {car.numberOfDoors}</p>
            <p>id : {car.id}</p>

          </div>
          ))}
        </div>
    )
};
export default AppCars;