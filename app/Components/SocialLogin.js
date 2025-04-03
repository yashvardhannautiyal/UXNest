"use client";
import React from "react";
// import { FaGoogle } from "react-icons/fa6";
// import { FaApple } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useSession, signIn, signOut } from "next-auth/react";

const SocialLogin = () => {
  //user login data
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br/> */}
        <p className="text-3xl font-bold">Signed in to </p>
      <span className="text-7xl font-navLogo">
        <span className="text-purple-700">UX</span>Nest
      </span>
    
        <button onClick={() => signOut()} 
          className="sm:m-2 p-3 w-full rounded-md bg-purple-700 hover:bg-purple-600 font-medium flex items-center justify-center transition delay-2000 duration-300 hover:cursor-pointer">
          Sign out
        </button>
      </>
    );
  }

  return (
    <div>
      <p className="text-3xl font-bold">Sign in to </p>
      <span className="text-7xl font-navLogo">
        <span className="text-purple-700">UX</span>Nest
      </span>
      <div className="p-4 sm:flex sm:flex-col items-center space-y-4">
        {/* button 1 : Github */}
        <button
          className="sm:m-2 p-3 w-full rounded-md bg-purple-700 hover:bg-purple-600 font-medium flex items-center justify-center transition delay-2000 duration-300 hover:cursor-pointer"
          onClick={() => {
            signIn("github");
          }}
        >
          <FaGithub className="" />
          <p className="sm:ml-2">Continue with GitHub</p>
        </button>
        <div className="sm:flex">
          {/* button 2 : Google */}
          {/* <button className="m-1 sm:p-2.5 p-2 sm:w-60 w-full rounded-md text-white bg-gray-800 hover:text-gray-400 font-medium flex items-center justify-center transition delay-2000 duration-300 hover:cursor-pointer">
            <FaGoogle className="" />
            <p className="ml-2">Continue with Google</p>
          </button> */}
          {/* button 3 : Apple */}
          {/* <button className="bg-gray-800 m-1 sm:p-2.5 p-2 sm:w-60 w-full rounded-md hover:text-gray-400 flex items-center justify-center transition delay-2000 duration-300 font-medium hover:cursor-pointer">
            <FaApple />
            <p className="ml-2">Continue with Apple</p>
          </button> */}
        </div>
        <p className="font-normal text-gray-400 text-lg">
          Login or register to start implementing your ideas into reality
        </p>
      </div>
    </div>
  );
};

export default SocialLogin;
