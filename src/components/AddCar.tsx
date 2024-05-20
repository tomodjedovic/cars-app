import { useState } from "react"
import { Car } from "./AppCars"

interface CarProps {
    brand: string;
    model: string;
    year: number;
    maxSpeed: number;
    isAutomatic: false|true;
    engine: string;
    numberOfDoors: number;
  }




const AddCar:React.FC=()=>{
    const [newCar,setNewCar]=useState<CarProps>(
       { brand: "",
        model: "",
        year: 0,
        maxSpeed: 0,
        isAutomatic: true,
        engine: "",
        numberOfDoors: 0
    }
    );
    const handleChange = (event:any) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewCar(values => ({...values, [name]: value}))
    console.log (newCar);
    }

    

    return(
        <div className="AddCar">
            <form onSubmit={(e)=>(e.preventDefault)} className="add-car-form">

                <label>
                    Brand : 
                    <input 
                    type="text"
                    name="brand"
                    value={newCar.brand } 
                    onChange={(e)=>handleChange(e)}
                    />
                </label>

                <label>
                    Model : 
                    <input 
                    type="text"
                    name="model"
                    value={newCar.model} 
                    onChange={(e)=>handleChange(e)}
                     />
                </label>

                <label>
                    Year :
                    <input 
                    type="number"
                    name="year"
                    value={newCar.year} 
                    onChange={(e)=>handleChange(e)}
                     />
                </label>

                <label>
                    Max.speed :
                    <input 
                    type="number"
                    name="maxSpeed"
                    value={newCar.maxSpeed} 
                    onChange={(e)=>handleChange(e)} 
                    />
                </label> 

                <label>
                     Engine :
                    <input 
                    type="text"
                    name="engine"
                    value={newCar.engine} 
                    onChange={(e)=>handleChange(e)} 
                    />
                </label>

                   

                <label id="gearbox">
                    <input type="radio" name="isAutomatic" value="false"/>Manual
                    <input type="radio" name="isAutomatic" value="true"/>Automatic
                </label>

                    
                <label>
                    Number of doors :
                    <input 
                    type="number"
                    name="numberOfDoors"
                    value={newCar.numberOfDoors} 
                    onChange={(e)=>handleChange(e)}
                    />
                </label>
                    
                <label>
                    <button>Add Car</button>
                </label>


            </form>

        </div>
    )
};
export default AddCar;