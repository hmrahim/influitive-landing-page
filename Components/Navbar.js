import React from "react";
import Image from "next/image";

const Navbar = () => {
  const menu = (
    <>
      <li className="hover:text-primary">
        <a>Home</a>
      </li>
      <li className="hover:text-primary">
        <a>Services</a>
      </li>
      <li className="hover:text-primary">
        <a>Resources</a>
      </li>
      <li className="hover:text-primary">
        <a>Pricing</a>
      </li>
      <li className="hover:text-primary">
        <a>Company</a>
      </li>

     
    </>
  );
  return (
    <div className="navbar bg-base-100 w-full px-4 md:px-0 lg:px-0 md:w-5/6 lg:w-5/6 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <a className=" flex justify-center items-center">
          <Image src="/images/logo.svg" width={150} height={70}></Image>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
       {menu}
        </ul>
      </div>
      <div className="navbar-end">

        <a className="mr-4 text-xl font-semibold">Login</a>
        <a className="btn btn-primary">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;
