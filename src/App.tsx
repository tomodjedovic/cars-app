import React from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import AppCars from "./components/AppCars";
import { Provider } from "react-redux";
import store from "./store";

const App:React.FC=()=>{
  return(
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <nav>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
      </nav>
      <Routes>
        <Route path="/cars" element={<AppCars/>}/>
      </Routes>
      
      </BrowserRouter>
      </Provider>

    </div>
  )

};
export default App;