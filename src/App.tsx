import React from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import AppCars from "./components/AppCars";
import "./App.css"


const App:React.FC=()=>{
  return(
    <div className="App">
      <BrowserRouter>
      <nav>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
      </nav>
      <h1>Cars App</h1>
      <Routes>
        <Route path="/cars" element={<AppCars/>}/>
      </Routes>
      
      </BrowserRouter>


    </div>
  )

};
export default App;