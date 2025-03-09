import { Outlet } from "react-router";
import {Link} from "react-router";
export default function Furniture() {
  return (
    <>
       <nav className="bg-black flex font-bold justify-between flex-col text-white px-5 py-2 rounded-lg shadow-md w-25 mx-auto mt-4 p-2 fixed top-2 right-0 hover:text-red-500"> 
                 <Link to="/Furniture">Furniture</Link> 
                  <Link to="Sofa">Sofa</Link>
                  <Link to="Bed">Bed</Link>
              </nav>
      <Outlet/>
    </>
  );
}