import React from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import AppCars from "./components/AppCars";
import "./App.css"
import AddCar from "./components/AddCar";


const App:React.FC=()=>{
  return(
    <div className="App">
      <BrowserRouter>
      <nav>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to="/addCars">Add New Car</Link>
        </li>
      </nav>
      
      <Routes>
        <Route path="/cars" element={<AppCars/>}/>
        <Route path="/addCars" element={<AddCar/>}/>
      </Routes>
      
      </BrowserRouter>


    </div>
  )

};
export default App;