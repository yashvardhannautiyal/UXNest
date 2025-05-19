import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api_base_url } from "../../../helper";
const Login = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const submitForm = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(api_base_url + "/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: pwd
      })
    });

    if (!response.ok) {
      // Handles non-200 status codes
      const errorData = await response.text(); // Read as text for better error message
      throw new Error(`Error ${response.status}: ${errorData}`);
    }

    const data = await response.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userId", data.userId);
      navigate("/editor");
    } else {
      setError(data.message || "Login failed. Please try again.");
    }
  } catch (err) {
    console.error("Login Error:", err);
    setError("An error occurred while logging in. Please try again.");
  }
};

  return (
    <div className="flex min-h-full flex-col justify-center px-6 pt-12 lg:px-8 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
          Login in to your account
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-3" onSubmit={submitForm}>
          <div>
              <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 text-gray-900 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-700 sm:text-sm/6"
              />
          </div>

          <div>           
              <input
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              value={pwd}
                type="password"
                name="password"
                placeholder="Enter password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-700 sm:text-sm/6"
              />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-purple-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700">
              Login
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm/6 text-gray-500">
          New user
          <Link to = "/signin"
            
            className="font-semibold text-purple-700 hover:text-purple-500"
          >
            Sign in here
          </Link>
        </p>
        <p className="text-red-700 my-2">{error}</p>
      </div>
    </div>
  );
};

export default Login;
