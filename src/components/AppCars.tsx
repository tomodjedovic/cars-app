import React, { useEffect } from "react";
import carService from "../services/CarService";
import { useDispatch,useSelector } from "react-redux";
import { selectCars } from "../store/cars/selector";
import slice, { setCars } from "../store/cars/slice";
import CarRow from "./CarRow";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const cars:Car[] = useSelector(selectCars);
    
    const deleteFromList=(id:number)=>{
      carService.deleteCar(id);
      navigate("/cars");


    }
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
          <button onClick={()=>deleteFromList(car.id)}>Obrisi</button>
        </ul>
      ))}
        </>
    )
};
export default AppCars;