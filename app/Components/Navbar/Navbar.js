"use client";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const menu = () => {
  const dialog = document.getElementById("dialog");
  dialog.classList.toggle("hidden");
};

const Navbar = () => {
  return (
    <>
      <nav className="relative z-10 p-2 bg-transparent text-white flex justify-between items-center">
        {/*  logoName  */}
        <Link href={"/home"} className="flex items-center">
          <span className="text-6xl font-navLogo font-medium">
            <span className="text-purple-700">UX</span>Nest
          </span>
        </Link>

        <div className="hidden lg:flex gap-12 font-medium p-4">
          {/* home  */}
          <Link
            href={"/home"}
            className="font-normal text-white hover:text-purple-200"
          >
            Home
          </Link>

          {/* Log-in  */}
          <Link
            href={"/login"}
            className="font-normal text-white hover:text-purple-200"
            style={{ cursor: "pointer" }}
          >
            Sign in
          </Link>

          {/* dark mode */}
          {/* <button className=""> */}
            <ThemeToggle />
          {/* </button> */}
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
              <span className="text-6xl font-navLogo font-medium">
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
            <Link
              href={"/home"}
              className="font-medium text-2xl m-3 p-8 hover:text-gray-600"
            >
              Home
            </Link>

            <div className="h-[1px] bg-gray-300 m-4"></div>
            <Link
              href={"/editor"}
              className="font-medium text-2xl m-3 p-8 hover:text-gray-600"
            >
              Get started
            </Link>
            <div className="h-[1px] bg-gray-300 m-4"></div>
            <div className="p-3">
              <button className="text-white bg-purple-700 rounded-md p-1 text-lg hover:bg-purple-500 font-medium w-full">
                <Link href={"/login"}>Sign-in </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
