import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div className="p-2 flex items-center justify-center">
      {/* button 1 : Google */}
      <button className=" border-2 m-2 p-2 w-40 rounded-md border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-medium flex items-center justify-center transition delay-2000 duration-300">
        <FcGoogle className="" />
        <p className="ml-2">Google</p>
      </button>

      {/* button 2 : Apple */}
      <button className=" border-2 m-2 p-2 w-40 rounded-md border-black hover:bg-black hover:text-white  flex items-center justify-center transition delay-2000 duration-300">
        <FaApple />
        <p className="ml-2">Apple</p>
      </button>
    </div>
  );
};

export default SocialLogin;
