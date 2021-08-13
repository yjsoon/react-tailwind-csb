import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="center-container">
      <div className="p-10 h-60 bg-red-100 flex flex-col text-center justify-center items-center">
        <img
          src={logo}
          className="animate-spin w-20 h-20 bg-black rounded-full"
          alt="logo"
        />
        <p className="mt-8">
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </div>
  );
}

export default App;
