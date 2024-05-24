import React, { useState } from "react";
import carService from "../services/CarService";
import { useNavigate } from "react-router-dom";

export interface CarProps {
  brand: string;
  model: string;
  year: number;
  maxSpeed: number;
  isAutomatic: boolean;
  engine: string;
  numberOfDoors: number;
}

const AddCar: React.FC = () => {
  const navigate = useNavigate();
  const [newCar, setNewCar] = useState<CarProps>({
    brand: "",
    model: "",
    year: 0,
    maxSpeed: 0,
    isAutomatic: true,
    engine: "",
    numberOfDoors: 0,
  });

  const handleRadioButtons = (e: any) => {
    const value = e.target.value;
    setNewCar((values) => ({ ...values, engine: value }));
    console.log(value);
  };

  const handleSubmit = (e: any) => e.prevent.default;

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewCar((values) => ({ ...values, [name]: value }));
    console.log("novi Auto : ", newCar);
  };

  const postNewCar = () => {
    carService.postCar(newCar);
    navigate("/cars");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          required
          name="brand"
          type="text"
          placeholder="Brend"
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          required
          type="text"
          name="model"
          placeholder="Model"
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          type="number"
          name="year"
          placeholder="Godiste"
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          type="number"
          name="mahSpeed"
          placeholder="Max.Brzina"
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          type="radio"
          name="engine"
          value={"diesel"}
          onChange={handleRadioButtons}
        />{" "}
        Dizel
      </label>

      <label>
        <input
          type="radio"
          name="engine"
          value={"petrol"}
          onChange={handleRadioButtons}
        />{" "}
        Benzin
      </label>

      <label>
        <input
          type="radio"
          name="engine"
          value={"hybrid"}
          onChange={handleRadioButtons}
        />{" "}
        Hibrid
      </label>

      <label>
        <input
          type="radio"
          name="engine"
          value={"electric"}
          onChange={handleRadioButtons}
        />{" "}
        Struja
      </label>

      <label>
        <input
          type="number"
          name="numberOfDoors"
          placeholder="Broj Vrata"
          onChange={handleChange}
        />
      </label>

      <button onClick={postNewCar}>Dodaj Auto</button>
    </form>
  );
};

export default AddCar;
