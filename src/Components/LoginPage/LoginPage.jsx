import React from "react"
import SocialLogin from "./SocialLogin";

const LoginPage = () =>{
    return(
        <>
        <div className="text-white flex items-center justify-center min-h-screen sm:pt-2">
            <div className="text-center">
            <p className="text-3xl font-bold">Sign in to </p>
            <span className="text-7xl font-navLogo">
            <span className="text-purple-700">UX</span>Nest
          </span>
            <p className="font-normal text-gray-400 text-lg">Login or register to start implementing your ideas into reality</p>
            <SocialLogin />
            </div>
            
            
            
        </div>
        </>
    )
}

export default LoginPage;