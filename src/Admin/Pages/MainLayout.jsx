import React from "react";
import { BsThreeDotsVertical, BsGlobe, BsFillBellFill } from "react-icons/bs";
import ModalLogin from "../../ModalLogout";
import Offcanvs from '../Offcanvs/Offcanvs'
// import { DarkModeContext } from "";
import { useContext } from "react";
import { DarkModeContext } from "../darkmode/darkModeContext";
// import { GrNotification } from "react-icons/gr";





const MainLayout = () => {

  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="crud">
      <div class="dropdown">

      <div className="bottom">
    <div
      className="colorOption"
      onClick={() => dispatch({ type: "LIGHT" })}
    ></div>
    <div
      className="colorOption"
      onClick={() => dispatch({ type: "DARK" })}
    ></div>
  </div>



        <a target="_blank" href="https://godgift.rrtutorials.com/">
          <button class="dropbtn">
            <BsGlobe />
          </button>
        </a>
        
         <button class="dropbtn">
          <Offcanvs />
          <span style={{ backgroundColor: "yellow", color: "black", borderRadius: "50%", position: "relative", top: "-40px", left: "15px", }}>7</span>
        </button>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          <BsThreeDotsVertical />
        </button>

    




        <div class="dropdown-content">
          <a href="#">
            <ModalLogin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
