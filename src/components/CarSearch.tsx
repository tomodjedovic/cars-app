import React, { ChangeEvent,} from "react";
import { useDispatch} from "react-redux";
import {setSearch} from "../store/cars/slice";
import { useNavigate } from "react-router-dom";

const CarSearch: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
   
    const handleSearchByBrand=(e:ChangeEvent<HTMLInputElement>)=>{
        dispatch(setSearch(e.target.value));
    }

  return(
    <>
      <label>
        <input 
        placeholder="pretrazi po brendu"
        type="text"
        onChange={handleSearchByBrand}
         />

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
