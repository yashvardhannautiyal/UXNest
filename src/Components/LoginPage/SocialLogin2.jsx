import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const SocialLogin2 = () => {
  return (
    <div className="p-4 flex flex-col items-center space-y-4">
    {/* button 1 : Github */}
    <button className="m-2 p-3 w-full rounded-md bg-purple-700 hover:bg-purple-600 font-medium flex items-center justify-center transition delay-2000 duration-300">
      <FaGithub className="" />
      <p className="ml-2">Sign in with GitHub</p>
    </button>
    <div className="flex">
    {/* button 2 : Google */}
    <button className="m-1 p-2.5 w-60 rounded-md text-white bg-gray-800 hover:text-gray-400 font-medium flex items-center justify-center transition delay-2000 duration-300">
      <FaGoogle className="" />
      <p className="ml-2">Sign in with Google</p>
    </button>
    {/* button 3 : Apple */}
    <button className="bg-gray-800 m-1 p-2.5 w-60 rounded-md hover:text-gray-400 flex items-center justify-center transition delay-2000 duration-300 font-medium">
      <FaApple />
      <p className="ml-2">Sign in with Apple</p>
    </button>
    </div>
  </div>
  
  );
};

export default SocialLogin2;
