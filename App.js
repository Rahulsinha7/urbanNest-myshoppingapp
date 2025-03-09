import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import Login from "./Login";
import Furniture from "./Furniture";
import Zero from "./pages/Zero";
import FurnitureDetails from "./FurnitureDetails";
import Sofa from "./pages/Sofa";



function App(){
    return(
       <BrowserRouter>
        <nav className="bg-black flex items-center px-6 py-2 rounded-lg shadow-md w-100 mx-auto mt-4 fixed top-10 left-10">
      {/* Logo */}
      <img
        src="https://img.freepik.com/premium-vector/furniture-logo-design-vector-art-illustration_761413-30681.jpg"
        alt="Furniture Logo"
        className="h-8 w-8 mr-4"
      />
      
      {/* Navigation Links */}
      <div className="flex space-x-6 text-white p-2 font-bold">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/Contact" className="hover:text-red-500">Contact</Link>
        <Link to="/Login" className="hover:text-red-500">Login</Link>
        <Link to="/Furniture" className="hover:text-red-500">Furniture</Link>
      </div>
    </nav>
      
       
    
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Furniture" element={<Furniture></Furniture>}>
        <Route index element={<Zero></Zero>}></Route>
        <Route path="Sofa" element={<Sofa></Sofa>}></Route>
        <Route path="/Furniture/:furnitureId" element={<FurnitureDetails />} />
        </Route>

       </Routes>
       </BrowserRouter>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);