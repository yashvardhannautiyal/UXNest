import React from "react";
import { IoMail } from "react-icons/io5";

import { FaLock } from "react-icons/fa";

const InputField = () => {
  return (
    <>
      <div className="">
        <div className="flex p-3 justify-center">
          <input
            type="email"
            placeholder="E-mail address"
            className="input-field inline border-2 p-2 rounded-md"
            required
          />
          <span className="p-3">
            <IoMail />
          </span>
        </div>

        <div className="flex p-3 justify-center">
          <input
            type="password"
            placeholder="Password"
            className="input-field inline border-2 p-2 rounded-md"
            required
          />
          <span className="p-3">
            <FaLock />
          </span>
        </div>
      </div>
    </>
  );
};

export default InputField;