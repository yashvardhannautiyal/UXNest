"use client";
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import Link from "next/link";

const SignIn = () => {  
//     return (
//       <>      
//         <div className="text-white flex items-center justify-center h-96 text-center">
//           <div>
//             <p className="sm:text-lg font-medium">
//               {/* Signed in as {session.user.email}
//               Signed in as {session.user.name} */}
//             </p>
//             <button
//             //   onClick={() => signOut()}
//               className="m-2 p-2 w-80 sm:w-96 rounded-md bg-purple-700 hover:bg-purple-600 font-medium flex items-center justify-center transition delay-2000 duration-300 hover:cursor-pointer"
//             >
//               Sign out
//             </button>
//             <button
//             className="m-2 p-2 w-80 sm:w-96 rounded-md bg-gray-800 hover:text-gray-400 font-medium flex items-center justify-center transition delay-2000 duration-300 hover:cursor-pointer"
//           >
//             <Link to = "/editor" className="flex gap-1 items-center">
//             Code <FaArrowRight /></Link>
//           </button>
//           </div>
//         </div>
//       </>
//     );
//   }
  return (
    <>
      <div className="text-white flex items-center justify-center mt-10 sm:pt-2">
        <div className="text-center">
          <div>
            <p className="text-3xl font-bold">Sign in to </p>
            <span className="text-5xl font-bold">
              <span className="text-purple-700">UX</span>Nest
            </span>

            <div className="p-4 sm:flex sm:flex-col items-center space-y-4">
              {/* button 1 : Github */}
              <button
                className="sm:m-2 p-3 w-full rounded-md bg-purple-700 hover:bg-purple-600 font-medium flex items-center justify-center transition delay-2000 duration-300 hover:cursor-pointer"
                // onClick={() => signIn("github")}
              >
                <FaGithub className="" />
                <p className="sm:ml-2">Continue with GitHub</p>
              </button>

              <div className="sm:flex">
                {/* button 2 : Google */}
                <button
                  className="m-1 sm:p-2.5 p-2 sm:w-60 w-full rounded-md text-white bg-gray-800 hover:text-gray-400 font-medium flex items-center justify-center transition delay-2000 duration-300 hover:cursor-pointer"
                //   onClick={() => signIn("google")}
                >
                  <FaGoogle className="" />
                  <p className="ml-2">Continue with Google</p>
                </button>
                {/* button 3 : Facebook */}
                <button className="bg-gray-800 m-1 sm:p-2.5 p-2 sm:w-60 w-full rounded-md hover:text-gray-400 flex items-center justify-center transition delay-2000 duration-300 font-medium hover:cursor-pointer"
                // onClick={() => signIn("facebook")}
                >
            <FaFacebookF />
            <p className="ml-2">Continue with Facebook</p>
          </button>
              </div>
              <p className="font-normal text-gray-400 text-lg">
                Login or register to start implementing your ideas into reality
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
