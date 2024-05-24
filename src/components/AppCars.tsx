import React, { useEffect, useState } from "react";
import carService from "../services/CarService";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredCars,
  selectNumberOfSelectid,
} from "../store/cars/selector";
import slice, {
  setCars,
  selectDeselect,
  selectAll,
  deselectAll,
} from "../store/cars/slice";
import CarRow from "./CarRow";

export interface Car {
  brand: string;
  model: string;
  year: number;
  maxSpeed: number;
  isAutomatic: boolean;
  engine: string;
  numberOfDoors: number;
  id: number;
}

const AppCars: React.FC = () => {
  const dispatch = useDispatch();
  const cars: Car[] = useSelector(selectFilteredCars);
  const numberOfSelect = useSelector(selectNumberOfSelectid);

  const deleteCarFromList = async (id: number) => {
    await carService.deleteCar(id);
    fetchCars();
  };

  const handleSelect = (car: Car) => {
    console.log(car);
    dispatch(selectDeselect(car));
  };

  const selectAllCars = () => {
    dispatch(selectAll());
  };

  const deselectAllCars = () => {
    dispatch(deselectAll());
  };

  async function fetchCars() {
    const carArr: Car[] = await carService.getAll();
    dispatch(setCars(carArr));
  }

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          selectAllCars();
        }}
      >
        selektuj sve
      </button>
      <button
        onClick={() => {
          deselectAllCars();
        }}
      >
        deselektuj sve
      </button>
      <p>br.selektovanih kola : {numberOfSelect}</p>
      {cars.map((car) => (
        <ul key={car.id}>
          <CarRow
            deleteCar={deleteCarFromList}
            select={handleSelect}
            car={car}
          />
        </ul>
      ))}
    </div>
  );
};
export default AppCars;
