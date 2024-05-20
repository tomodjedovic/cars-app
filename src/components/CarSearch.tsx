import React, { ChangeEvent, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setCars ,setSearch} from "../store/cars/slice";
import { selectCars } from "../store/cars/selector";




const CarSearch: React.FC = () => {
    const dispatch = useDispatch();
   
    const handleSearchByBrand=(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch(setSearch(e.target.value));

    }

  return(
    <>
      <label>
        <input 
        placeholder="search by brand"
        type="text"
        onChange={handleSearchByBrand}


        />
      </label>
      <label>
        <input 
        placeholder="search by model"
        type="text"
        value={""}
         />
      </label>
    </>
  )
};

export default CarSearch;
