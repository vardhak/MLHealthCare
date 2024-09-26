import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="z-20 fixed h-[80px] w-full bg-[#000000d0]  text-white flex justify-between items-center">
      <h1 className="ml-8 font-bold text-3xl">HealthCare</h1>
      <ul className="flex justify-center items-center max-[1000px]:hidden">
        <li className="m-2">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="m-2">
          <NavLink to="/models">Models</NavLink>
        </li>
        <li className="m-2">
          <NavLink to="/intutions">Intutions</NavLink>
        </li>
        <li className="m-2">
          <NavLink to="/feedback">Feedback</NavLink>
        </li>
      </ul>
      <button className="mr-8 border px-3 rounded-3xl py-1 border-white hover:bg-white hover:text-black">
        Get Started
      </button>
    </nav>
  );
}
