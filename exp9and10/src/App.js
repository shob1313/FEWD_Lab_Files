import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Aboutus from "./components/AboutUs";
import Products from "./components/Products";
import Contactus from "./components/Contactus";

function App() {
  return (
    <BrowserRouter>   
        <Routes>
          <Route exact path="/" element={<Home/>} />          
          <Route path="/aboutus" element ={<Aboutus/>} />
          <Route path="/products" element ={<Products/>} />
          <Route path="/contactus" element ={<Contactus/>} />
                                  
          
        </Routes>
        </BrowserRouter>

     );
}

export default App;
