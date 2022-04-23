import React from "react";
import Navbar from "../shared/navbar";
import Sidebar from "../shared/sidebar";

export default function index() {
  return (
    <div>
      <div className="w-screen h-screen bg-teal-700 flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="w-full h-full">
              Helloooooooo
          </div>
        </div>
      </div>
    </div>
  );
}
