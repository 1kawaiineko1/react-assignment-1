import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/logo.png";
import { NavLink } from "react-router";
import { faL } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [dropdownClass, setDropdownClass] = useState("max-h-0");
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);

    if (!isOpen) {
      setDropdownClass("max-h-80 pb-6");
      console.log(isOpen);
    } else {
      setDropdownClass("max-h-0");
      console.log(isOpen);
    }
  }
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-20">
            <NavLink to={"/"}>
              <div className="nav-logo flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                  <img
                    src={logo}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                    عدسة
                  </span>
                  <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                    عالم التصوير الفوتوغرافي
                  </span>
                </div>
              </div>
            </NavLink>
            <div className="nav-links hidden md:flex items-center">
              <NavLink
                to="/"
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="/blog"
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
              >
                المدونة
              </NavLink>
              <NavLink
                to="/about"
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
              >
                من نحن
              </NavLink>
            </div>
            <div className="hidden md:flex action-buttons items-center gap-3">
              <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                <i className="fa-solid fa-magnifying-glass "></i>
              </button>
              <button className="btn-primary text-sm">ابدأ القراءة</button>
            </div>
            <div
              onClick={() => toggleDropdown()}
              className="menu-button md:hidden  p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            >
              {isOpen ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars "></i>
              )}
            </div>
          </div>
          <div
            className={` dropdown md:hidden overflow-hidden transition-all duration-300 ${dropdownClass}`}
          >
            <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
              <div className="flex flex-col space-y-1">
                <NavLink
                  className={
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }
                  to={"/"}
                >
                  الرئيسية
                </NavLink>
                <NavLink
                  className={
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }
                  to={"/blog"}
                >
                  المدونة
                </NavLink>
                <NavLink
                  className={
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                  }
                  to={"/about"}
                >
                  من نحن
                </NavLink>
                <NavLink
                  className={"btn-primary text-sm text-center mt-2"}
                  to={"/"}
                >
                  ابدأ القراءة
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
