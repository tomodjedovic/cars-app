import React from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import AppCars from "./components/AppCars";
import { Provider } from "react-redux";
import store from "./store";
import CarSearch from "./components/CarSearch";
import AddCar from "./components/AddCar";

const App:React.FC=()=>{
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <header>
            <nav>
              <li>
                <Link to="/cars">Cars</Link>
              </li>
              <li>
                <Link to="/AddCar">Add Cars</Link>
              </li>
              <CarSearch />
            </nav>
          </header>
          <Routes>
            <Route path="/cars" element={<AppCars />} />
            <Route path="/AddCar" element={<AddCar/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );

};
export default App;