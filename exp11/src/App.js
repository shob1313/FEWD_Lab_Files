import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Aboutus from "./components/AboutUs";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>   
        <Routes>
          <Route exact path="/" element={<Home/>} />          
          <Route path="/aboutus" element ={<Aboutus/>} />
          <Route path="/products" element ={<Products/>} />
          <Route path="/contactUs" element ={<ContactUs/>} />
                                  
          
        </Routes>
        </BrowserRouter>

     );
}

export default App;
