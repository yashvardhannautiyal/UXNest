import { useState } from "react";
import { Link } from "react-router-dom";
import { api_base_url } from "../../../helper";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [error, setError] = useState("")
  const navigate = useNavigate();

  const submitForm = (e) =>{
    e.preventDefault();
    fetch(api_base_url + "/signup", {
      mode: "cors",
      method : "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        username: username,
        name: name,
        email: email,
        password: pwd,
      })
    }).then((res)=>res.json()).then((data)=>{
      if(data.success === true){
        alert("Account created successfully");
        navigate("/login");
      }
      else{
        setError(data.message);
      }
    })
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 pt-12 lg:px-8 text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-3" onSubmit={submitForm}>
          <div>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              type="text"
              autoComplete="username"
              placeholder="Enter your username"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 text-gray-900 -outline-offset-1 outline-gray-300 placeholder:text-gray-600  focus:outline-2 focus:-outline-offset-2 focus:outline-purple-700 sm:text-sm/6"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 text-gray-900 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-700 sm:text-sm/6"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
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
              placeholder="Enter password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-700 sm:text-sm/6"
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-purple-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm/6 text-gray-500">
          Already registered
          <Link
            to="/login"
            className="font-semibold text-purple-700 hover:text-purple-500"
          >
            Login here
          </Link>
        </p>
         <p className="text-red-700 my-2">{error}</p>
      </div>
    </div>
  );
};

export default SignIn;
