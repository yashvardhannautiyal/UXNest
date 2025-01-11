import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaSquareJs, FaDisplay } from "react-icons/fa6";
import ErrorBoundary from "./ErrorBoundary";

function Editor() {
  const [error, setError] = useState("");

  function run(event) {
    if (event.key !== "Enter") return;

    try {
      const htmlCode = document.getElementById("html-input").value;
      const cssCode = document.getElementById("css-input").value;
      const jsCode = document.getElementById("js-input").value;
      const outputGiven = document.getElementById("output");

      // Validate HTML
      const htmlError = isValidHTML(htmlCode);
      if (htmlError) {
        throw new Error(`HTML Error: ${htmlError}`);
      }

      // Validate CSS
      const cssError = isValidCSS(cssCode);
      if (cssError) {
        throw new Error(`CSS Error: ${cssError}`);
      }

      // Inject HTML and CSS
      outputGiven.contentDocument.body.innerHTML = `${htmlCode} <style> ${cssCode} </style>`;

      // Evaluate JavaScript
      try {
        outputGiven.contentWindow.eval(jsCode);
      } catch (jsError) {
        throw new Error(`JavaScript Error: ${jsError.message}`);
      }

      setError(""); // Clear any previous error
    } catch (err) {
      setError(err.message); // Set the error message
    }
  }

  function isValidHTML(html) {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(html, "text/html");
    const error = parsed.querySelector("parsererror");
    return error ? error.textContent : null;
  }

  function isValidCSS(css) {
    try {
      const styleSheet = new CSSStyleSheet();
      styleSheet.replaceSync(css);
    } catch (e) {
      return e.message; // Return specific CSS syntax error
    }

    // Additional manual validation for balanced brackets
    const openBrackets = (css.match(/{/g) || []).length;
    const closeBrackets = (css.match(/}/g) || []).length;
    if (openBrackets !== closeBrackets) {
      return "Unmatched curly brackets in CSS.";
    }

    return null;
  }

  return (
    <>
      <div id="container" className="text-white min-h-screen sm:flex bg-gray-950">
        {/* Code input area */}
        <div id="left" className="p-2 basis-full w-full bg-gray-950">
          {/* HTML input box */}
          <label className="font-medium flex items-center pb-1">
            <FaHtml5 />
            <span className="pl-1">HTML</span>
          </label>
          <textarea
            name="html-input"
            id="html-input"
            className="w-full h-32 bg-gray-900 p-2"
            onKeyUp={run}
          ></textarea>
          {/* CSS input box */}
          <label className="font-medium flex items-center pb-1">
            <FaCss3Alt />
            <span className="pl-1">CSS</span>
          </label>
          <textarea
            name="css-input"
            id="css-input"
            className="w-full h-32 bg-gray-900 p-2"
            onKeyUp={run}
          ></textarea>
          {/* JS input box */}
          <label className="font-medium flex items-center pb-1">
            <FaSquareJs />
            <span className="pl-1">JS</span>
          </label>
          <textarea
            name="js-input"
            id="js-input"
            className="w-full h-32 bg-gray-900 p-2"
            onKeyUp={run}
          ></textarea>
        </div>
        {/* Code output area */}
        <div id="right" className="w-full sm:pb-12 sm:pr-1 p-2">
          <label className="font-medium flex items-center pb-1">
            <FaDisplay />
            <span className="pl-1">Output</span>
          </label>
          <ErrorBoundary>
            <iframe
              id="output"
              className="bg-gray-50 h-full w-full p-4 text-black"
            ></iframe>
          </ErrorBoundary>
        </div>
      </div>

      {/* Error Popup */}
      {error && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setError("")} // Close on overlay click
        >
          <div
            className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-black relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
          >
            <h2 className="text-lg font-bold text-red-600">Error</h2>
            <p className="mt-2">{error}</p>
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => setError("")}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Editor;