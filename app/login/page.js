import React from "react"
import SocialLogin from "../Components/SocialLogin";

const LoginPage = () =>{
    return(
        <>
        <div className="text-white flex items-center justify-center min-h-screen sm:pt-2">
            <div className="text-center">            
            <SocialLogin />
            </div>
            
            
            
        </div>
        </>
    )
}

export default LoginPage;