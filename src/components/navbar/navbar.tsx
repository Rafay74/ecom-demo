import React from "react";
import { NAVBAR_ITEMS } from "../../data";
import MainSection from "./main-header";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {

  return (
    <>
      
      <nav className="bg-primary text-white text-lg h-20 flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20  z-50">
        <div className="hidden lg:flex items-center gap-14">
          {NAVBAR_ITEMS.map((menu, index) => (
            <div
              key={index}
              className={`hover:cursor-pointer transition-colors duration-200 ${
                index === 0 ? "text-white font-semibold" : ""
              }`}
            >
              <Link to={menu.path}>{menu.label} </Link>
            </div>
          ))}
        </div>

        <div className="absolute right-0 pr-4 sm:pr-6 md:pr-10 lg:pr-20">
          <div className="bg-primary text-white text-lg font-semibold ">FORSA LUXURY</div>
        </div>
      </nav>
      <div className="bg-white">
        <MainSection/>
      </div>

    
    </>
  );
};

export default Navbar;
