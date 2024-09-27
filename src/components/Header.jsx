import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [status, setStatus] = useState(false);

  return (
    <>
      <nav className="z-20 fixed h-[80px] w-full bg-[#000000d0]  text-white flex justify-between items-center">
        <h1 className="ml-8 font-bold text-3xl ">HealthCare</h1>
        <ul className="justify-center items-center hidden md:flex">
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
        <button className="mr-8 border px-3 rounded-3xl py-1 border-white hover:bg-white hover:text-black hidden md:block">
          Get Started
        </button>
        <button
          className="mr-8 border px-3 rounded-3xl py-1 border-white hover:bg-white hover:text-black block md:hidden"
          onClick={() => setStatus(!status)}
        >
          MENU
        </button>
      </nav>
      {status ? (
        <div className="w-[70%] h-[60%] fixed bg-white z-20 cen2  justify-center items-center flex-col flex shade">
          <ul className="flex justify-center items-center flex-col">
            <li className="m-2">
              <NavLink to="/" onClick={() => setStatus(!status)}>
                Home
              </NavLink>
            </li>
            <li className="m-2">
              <NavLink to="/models" onClick={() => setStatus(!status)}>
                Models
              </NavLink>
            </li>
            <li className="m-2">
              <NavLink to="/intutions" onClick={() => setStatus(!status)}>
                Intutions
              </NavLink>
            </li>
            <li className="m-2">
              <NavLink to="/feedback" onClick={() => setStatus(!status)}>
                Feedback
              </NavLink>
            </li>
          </ul>
          <button className="mt-8 border px-3 rounded-3xl py-1 border-black hover:text-white hover:bg-black">
            Get Started
          </button>
        </div>
      ) : null}
    </>
  );
}
