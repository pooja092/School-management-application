import React, { useState } from "react";
import { FaBars , FaUserGraduate} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdAppRegistration } from "react-icons/md";
import { GiTimeBomb ,GiTakeMyMoney,GiArchiveRegister} from "react-icons/gi";
import { SiWebmoney,SiTrendmicro } from 'react-icons/si'


// import { BiCategoryAlt } from "react-icons/bi";
// import { AiFillFileMarkdown ,AiOutlineShoppingCart,AiFillFileZip } from "react-icons/ai";

import "../App.css";
import { useAuthValue } from "../AuthContext";




const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  

  const [submenuOpen, setSubmenu] = useState(false);
  const icon = () => setIsOpen(!submenuOpen);
  const { currentUser } = useAuthValue()

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
   {
      path: "/registration",
      name: "Registration",
      icon: <MdAppRegistration />,
    },
    // {
    //   path: "/postlist",
    //   name: "Student",
    //   icon: <FaUserGraduate />,
    // },
    
    {
      path: "/teacherform",
      name: "Teacher",
      icon: <GiArchiveRegister />,
    },

    // {
    //   path: "/detaillist",
    //   name: "DetailList",
    //   icon: <FaUserGraduate />,
    // },


    {
      path: "/timetable",
      name: "Time-Table",
      icon: <GiTimeBomb />,
    },
    // {
    //   path: "/tablelist",
    //   name: "Show-TimeTable",
    //   icon: <BiCategoryAlt />,
    // },
    
    // {
    //   path: "/feesform",
    //   name: "Fees",
    //   icon: <AiFillFileMarkdown />,
    // },
    // {
    //   path: "/feeslist",
    //   name: "fees-List",
    //   icon: <AiOutlineShoppingCart />,
    // }, 
    {
      path: "/leaveform",
      name: "Leave",
      icon: <SiTrendmicro />,
    },

    // {
    //   path: "/leavelist",
    //   name: "Leave-List",
    //   icon: <AiFillFileZip />,
    // },
    {
      path: "/salleryform",
      name: "Sallery",
      icon: <SiWebmoney />,
    },

 

  ];

  
  return (
    <div className="container-fluid">
      <div style={{ width: isOpen ? "260px" : "50px" }} className="sidebar">
        <div className="top_section">
          <p className="admin-text" style={{ display: isOpen ? "block" : "none" }}>
            Admin
          </p>
          <div
            style={{ marginLeft: isOpen ? "120px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          {/* <img width="100px" src="./img/profile.png" alt="" /> */}
        </h1>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>


        ))}
</div>




      <main style={{ width: "100%", height: "100vh", overflow: "scroll" }}>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
