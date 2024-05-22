import React from "react";
import { Car } from "./AppCars";

interface CarProps {
    car : Car;
    select:(car:Car)=>void;
}


const CarRow:React.FC<CarProps>=({car, select})=>{
    return (
      <li>
        <h3>brand : {car.brand}</h3>
        <p>model : {car.model}</p>
        <p>godiste {car.year}</p>
        <p>max.brzina : {car.maxSpeed}</p>
        <p>motor : {car.engine}</p>
        <p>broj vrata : {car.numberOfDoors}</p>
        <p>id auta : {car.id}</p>
        <button onClick={()=>select(car)}>selektuj</button>
      </li>
    );
};
export default CarRow;