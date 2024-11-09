import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaSquareJs, FaDisplay } from "react-icons/fa6";

function Editor() {
  const [error, setError] = useState("");

  function run() {
    try {
      let htmlCode = document.getElementById("html-input").value;
      let cssCode = document.getElementById("css-input").value;
      let jsCode = document.getElementById("js-input").value;
      let outputGiven = document.getElementById("output");

      outputGiven.contentDocument.body.innerHTML = `${htmlCode} <style> ${cssCode} </style>`;
      outputGiven.contentWindow.eval(jsCode);
      setError(""); // Clear any previous error
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  }

  return (
    <>
      <div id="container" className="text-white min-h-screen sm:flex bg-gray-950">
        {/* code input area  */}
        <div id="left" className="p-2 basis-full w-full bg-gray-950">
          {/* html input box  */}
          <label className="font-medium flex items-center pb-1">
            <FaHtml5 /><span className="pl-1">HTML</span>
          </label>
          <textarea
            name="html-input"
            id="html-input"
            className=" w-full h-32 bg-gray-900 p-2"
            onKeyUp={run}
          ></textarea>
          {/* css input box  */}
          <label className="font-medium flex items-center pb-1">
            <FaCss3Alt /><span className="pl-1">CSS</span>
          </label>
          <textarea
            name="css-input"
            id="css-input"
            className=" w-full h-32 bg-gray-900 p-2"
            onKeyUp={run}
          ></textarea>
          {/* js input box  */}
          <label className="font-medium flex items-center pb-1">
            <FaSquareJs /><span className="pl-1">JS</span>
          </label>
          <textarea
            name="js-input"
            id="js-input"
            className=" w-full h-32 bg-gray-900 p-2"
            onKeyUp={run}
          ></textarea>
        </div>
        {/* code output area  */}
        <div id="right" className="w-full sm:pb-12 sm:pr-1 p-2">
          <label className="font-medium flex items-center pb-1">
            <FaDisplay /><span className="pl-1">Output</span>
          </label>
          <iframe id="output" className="bg-gray-50 h-full w-full p-4 text-black"></iframe>
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </div>
      </div>
    </>
  );
}

export default Editor;
