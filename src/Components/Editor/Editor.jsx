import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaSquareJs, FaDisplay } from "react-icons/fa6";

function Editor() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  // Strict HTML Validation
  const validateHTML = (htmlCode) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlCode, "text/html");

    // Check for parser errors
    const parseError = doc.querySelector("parsererror");
    if (parseError) {
      throw new Error("HTML syntax error detected. Please check your tags and structure.");
    }

    // Manual validation for mismatched tags
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlCode;
    if (tempDiv.innerHTML !== htmlCode) {
      throw new Error("HTML syntax error: Mismatched or invalid tags detected.");
    }
  };

  // Validate CSS
  const validateCSS = (cssCode) => {
    try {
      const styleSheet = new CSSStyleSheet();
      styleSheet.replaceSync(cssCode);
    } catch (e) {
      throw new Error("CSS syntax error detected. Please check your CSS rules.");
    }
  };

  // Validate JavaScript
  const validateJS = (jsCode) => {
    try {
      new Function(jsCode); // Throws an error for invalid JS
    } catch (e) {
      throw new Error("JavaScript syntax error detected. Please check your code.");
    }
  };

  // Run Code Button Handler
  const runCode = () => {
    setError(""); // Clear previous errors
    try {
      // Validate all fields
      validateHTML(html);
      validateCSS(css);
      validateJS(js);

      // If all inputs are valid, construct the output
      const combinedOutput = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
        </html>
      `;
      setOutput(combinedOutput); // Render the output
    } catch (e) {
      setOutput(""); // Clear output on error
      setError(e.message); // Display error
    }
  };

  return (
    <>
     {/* Run Button */}
     <div className="flex justify-center">
     <button
            onClick={runCode}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium sm:py-2 sm:px-5 px-2 py-1 rounded"
          >
            Run
          </button>
          </div>
      <div id="container" className="text-white min-h-screen sm:flex bg-gray-950">
        {/* Code input area */}
        <div id="left" className="p-2 basis-full w-full bg-gray-950">
          {/* HTML Input */}
          <label className="font-medium flex items-center pb-1">
            <FaHtml5 />
            <span className="pl-1">HTML</span>
          </label>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full h-32 bg-gray-900 p-2"
          ></textarea>

          {/* CSS Input */}
          <label className="font-medium flex items-center pb-1">
            <FaCss3Alt />
            <span className="pl-1">CSS</span>
          </label>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            className="w-full h-32 bg-gray-900 p-2"
          ></textarea>

          {/* JavaScript Input */}
          <label className="font-medium flex items-center pb-1">
            <FaSquareJs />
            <span className="pl-1">JavaScript</span>
          </label>
          <textarea
            value={js}
            onChange={(e) => setJs(e.target.value)}
            className="w-full h-32 bg-gray-900 p-2"
          ></textarea>

         
        </div>

        {/* Code output area */}
        <div id="right" className="w-full sm:pb-12 sm:pr-1 p-2">
          <label className="font-medium flex items-center pb-1">
            <FaDisplay />
            <span className="pl-1">Output</span>
          </label>
          {error ? (
            <div className="mt-4 text-red-500 bg-red-100 p-2 rounded">
              {error}
            </div>
          ) : (
            <iframe
              id="output"
              className="bg-gray-50 h-full w-full p-4 text-black"
              srcDoc={output}
              sandbox="allow-scripts"
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}

export default Editor;
