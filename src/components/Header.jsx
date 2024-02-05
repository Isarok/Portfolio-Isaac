import React from "react";
import logo from "../img/lgo.png";

const Header = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={logo} alt="lgo" className="md:w-[150px] w-[90px]" />
          </a>

          <button className="btn btn-sm">Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
