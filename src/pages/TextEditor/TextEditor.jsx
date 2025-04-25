import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaSquareJs, FaDisplay } from "react-icons/fa6";
import Editor from "@monaco-editor/react";

function TextEditor() {
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const [tab, setTab] = useState("html");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  useEffect(() => {
    const iframe = document.getElementById("iframe");
    if (iframe && output) {
      iframe.srcdoc = output;
    }
  }, [output]);

// HTML validation
// HTML validation (basic check for unclosed tags, etc.)
const validateHTML = (htmlCode) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlCode, "text/html");
  const errors = doc.querySelectorAll("parsererror");
  if (errors.length > 0) {
    throw new Error("HTML syntax error detected.");
  }
};

// CSS validation
const validateCSS = (cssCode) => {
  const style = document.createElement("style");
  style.textContent = cssCode;
  document.head.appendChild(style);
  const isValid = style.sheet && style.sheet.cssRules.length > 0;
  document.head.removeChild(style);
  if (!isValid && cssCode.trim() !== "") {
    throw new Error("CSS syntax error detected. Please check your rules.");
  }
};

// JS validation
const validateJS = (jsCode) => {
  try {
    new Function(jsCode); // Only checks for syntax errors
  } catch {
    throw new Error("JavaScript syntax error detected. Please check your code.");
  }
};

const runCode = () => {
  setError(""); // Clear old errors
  try {
    validateHTML(html);
    validateCSS(css);
    validateJS(js);

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
    setOutput(combinedOutput);
  } catch (e) {
    setError(e.message);
    setOutput(""); // Clear output on error
  }
  };

  return (
    <>
      <div className="flex justify-center gap-3">
        <button
          onClick={runCode}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium sm:py-2 sm:px-5 px-2 py-1 rounded hover:cursor-pointer"
        >
          Run
        </button>
        {/* <button
          //   onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium sm:py-2 sm:px-5 px-2 py-1 rounded hover:cursor-pointer"
        >
          Save
        </button> */}
      </div>
      <div id="container" className="text-white sm:flex bg-gray-950">
        <div id="left" className="w-[50%] bg-gray-950">
          <div className="flex gap-2">
            <div
              onClick={() => {
                setTab("html");
              }}
              className="tab cursor-pointer p-[6px]"
            >
              Html
            </div>
            <div
              onClick={() => {
                setTab("css");
              }}
              className="tab cursor-pointer p-[6px]"
            >
              Css
            </div>
            <div
              onClick={() => {
                setTab("js");
              }}
              className="tab cursor-pointer p-[6px]"
            >
              JavaScript
            </div>
          </div>
          {tab == "html" ? (
            <>
              <FaHtml5 className="text-xl pl-1" />
              <Editor
                onChange={(value) => setHtml(value || "")}
                height="78vh"
                language="html"
                value={html}
                className="w-[50%]" 
              />
              ;
            </>
          ) : tab == "css" ? (
            <>
              <FaCss3Alt className="text-xl pl-1" />
              <Editor
                onChange={(value) => setCss(value || "")}
                height="78vh"
                language="css"
                value={css}
                className="w-[50%]"
              />
              ;
            </>
          ) : (
            <>
              <FaSquareJs className="text-xl pl-1" />
              <Editor
                onChange={(value) => setJs(value || "")}
                height="78vh"
                language="javascript"
                value={js}
                className="w-[50%]"
              />
              ;
            </>
          )}
        </div>
        <div id="right" className="w-[50%] sm:pb-12 sm:pr-1 p-2 mt-5">
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
              id="iframe"
              className="bg-gray-50 h-[78vh] w-full p-4 text-black"
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}

export default TextEditor;
