import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="px-4 md:px-16 lg:px-28 py-8 mt-10 text-white">
       <div>
          <div className="sm:text-2xl">
            <ul className="flex space-x-2 justify-center text-center">
              <li>
                <div className="p-1 sm:mt-2 rounded-full hover:bg-white hover:text-black hover:cursor-pointer">
                  <FaFacebook />
                </div>
              </li>
              <li>
                <div className="p-1 sm:mt-2 rounded-full hover:bg-white hover:text-black hover:cursor-pointer">
                  <GrLinkedinOption />
                </div>
              </li>
              <li>
                <div className="p-1 sm:mt-2 rounded-full hover:bg-white hover:text-black hover:cursor-pointer">
                  <FaXTwitter />
                </div>
              </li>
              <li>
                <div className="p-1 sm:mt-2 rounded-full hover:bg-white hover:text-black hover:cursor-pointer">
                  <FaInstagram />
                </div>
              </li>
              <li>
                <div className="p-1 sm:mt-2 rounded-full hover:bg-white hover:text-black hover:cursor-pointer">
                  <FaGithub />
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4">
            <p className="hover:underline hover:cursor-pointer">Terms of use</p>
            <p className="hover:underline hover:cursor-pointer">Privacy Policy</p>
            <p className="hover:underline hover:cursor-pointer">Support</p>
          </div>
        </div>

        <div className="border-t border-t-gray-400 pt-8 text-gray-300 mt-7">
          <span className="flex justify-center items-center">
            Copyright
            <FaRegCopyright className="pl-2 pr-2 text-3xl"/>
            <p>2024. All Rights Reserved.</p>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
