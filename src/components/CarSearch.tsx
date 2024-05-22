import React, { ChangeEvent, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setCars ,setSearch} from "../store/cars/slice";
import { selectCars, selectFilteredCars } from "../store/cars/selector";
import { useNavigate } from "react-router-dom";

const CarSearch: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const searchedCars = useSelector(selectFilteredCars);
   
    const handleSearchByBrand=(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch(setSearch(e.target.value));
        dispatch(setCars(searchedCars))
         
        
        

    }

  return(
    <>
      <label>
        <input 
        placeholder="pretrazi po brendu"
        type="text"
        onChange={handleSearchByBrand}
         />
         <button onClick={()=>navigate("/addCar")}>Resetuj</button>
      </label>

      <label>
        <input 
        placeholder="pretrazi po modelu"
        type="text"
         />
      </label>
    </>
  )
};

export default CarSearch;
