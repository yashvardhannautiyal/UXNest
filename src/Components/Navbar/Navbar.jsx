import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const menu = () => {
  const dialog = document.getElementById("dialog");
  dialog.classList.toggle("hidden");
};

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleHomeClick = () => {
    navigate("/");
  };
  const handleGetStartedBtn = () =>{
    navigate("/editor");
  };

  return (
    <>
      <nav className="relative z-10 p-2 bg-transparent text-white flex justify-between items-center">
        {/*  logoName  */}
        <a href="#" className="flex items-center">
          <span className="text-6xl font-navLogo">
            <span className="text-purple-700">UX</span>Nest
          </span>
        </a>

        <div className="hidden lg:flex gap-12 font-medium p-4">
          {/* home  */}
          <a
            href="#"
            className="font-normal text-white transition delay-2000 duration-300 hover:text-purple-200"
            onClick={handleHomeClick}
          >
            Home
          </a>

          {/* Log-in 
          <a
            href="#"
            className="font-normal text-white transition delay-2000 duration-300 hover:text-purple-200"
            onClick={handleLoginClick}
            style={{ cursor: "pointer" }}
          >
            Sign in
          </a> */}

          {/* dark mode */}
          {/* <a
            href="#"
            className="font-normal text-white transition delay-2000 duration-300 hover:text-purple-200"
          >
            Darkmode
          </a> */}
        </div>

        {/* menu : for screen smaller than medium */}
        {/*  open menu icon */}
        <button className="lg:hidden" onClick={menu}>
          <span>
            <IoMenu />
          </span>
        </button>

        <div
          id="dialog"
          className="hidden fixed bg-white inset-0 p-3 z-10 lg:hidden text-black"
        >
          <div id="navMenu" className="flex justify-between">
            <a href="#" className="flex items-center">
              <span className="text-6xl font-navLogo">
                <span className="text-purple-700">UX</span>Nest
              </span>
            </a>

            {/* close icon */}
            <button className="lg:hidden" onClick={menu}>
              <span className="material-symbols-outlined font-bold">
                <IoClose />
              </span>
            </button>
          </div>

          <div id="menu" className="mt-16">
            <a
              href="#"
              className="font-medium text-2xl m-3 p-8 transition delay-2000 duration-300 hover:text-gray-600" onClick={handleHomeClick}
            >
              {" "}
              Home
            </a>
            <div className="h-[1px] bg-gray-300 m-4"></div>
            <a
              href="#"
              className="font-medium text-2xl m-3 p-8 transition delay-2000 duration-300 hover:text-gray-600" onClick={handleGetStartedBtn}
            >
              Get started
            </a>
            <div className="h-[1px] bg-gray-300 m-4"></div>
            <div className="p-3">
              {/* <button className="text-white bg-purple-700 rounded-md p-1 text-lg hover:bg-purple-500 mb-4 font-medium w-full transition delay-2000 duration-300">
                Login
              </button> */}
              {/* <button className="text-white bg-purple-700 rounded-md p-1 text-lg hover:bg-purple-500 font-medium w-full transition delay-2000 duration-300" onClick={handleLoginClick}>
                Sign-in
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
