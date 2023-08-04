import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Function to handle scroll event
  const handleScroll = () => {
    // Get the scroll position
    const scrollY = window.scrollY;

    // Set the state to indicate whether the navbar should change styles or not
    setIsScrolled(scrollY > 0);
  };
  useEffect(() => {
    // Add event listener to the window for scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navOptions = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a> Contact Us</a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Our Menu</a>
      </li>
      <li>
        <a>Our Shop</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`navbar fixed z-10  ${
          isScrolled
            ? "bg-white text-red-500"
            : "bg-black text-white bg-opacity-30"
        } max-w-screen-xl mx-auto text-white transition-all duration-300 shadow`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to="/"
            className="cursor-pointer normal-case font-second_font text-2xl leading-7 ml-2"
          >
            BISTRO BOSS <br />
            <span className="tracking-[5px] ">Restaurant</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;