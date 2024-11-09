import React from "react";
import InputField from "./InputField";
import SocialLogin from "./SocialLogin";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen shadow-lg">
    <div className=" bg-white border-2 border-gray-800 rounded-md p-6 w-96">
      <h2 className="text-3xl font-bold text-center">Log in with</h2>

      <SocialLogin />
      <p className="text-center">
        <span className="">OR</span>
      </p>
      <form action="#" className="text-center">
        <InputField />
        <a href="#" className="forget-pass-link underline text-purple-700">
          Forgot Password?
        </a>
        <button className="border-2">Log In</button>
      </form>
      <p className="text-center">
        Don't have an account?
        <a href="#" className="underline text-purple-700">
          Signup now
        </a>
      </p>
    </div>
    </div>
  );
};
export default LoginPage;