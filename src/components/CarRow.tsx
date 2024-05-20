import React from "react";
import { Car } from "./AppCars";

interface CarProps {
    car : Car
}


const CarRow:React.FC<CarProps>=({car})=>{
    return (
      <li>
        <h3>brand : {car.brand}</h3>
        <p>model : {car.model}</p>
        <p>godiste {car.year}</p>
        <p>max.brzina : {car.maxSpeed}</p>
        <p>motor : {car.engine}</p>
        <p>broj vrata : {car.numberOfDoors}</p>
        <p>id auta : {car.id}</p>
      </li>
    );
};
export default CarRow;