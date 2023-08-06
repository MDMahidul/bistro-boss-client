import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
      const {user,logOut} = useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
          .then(()=>{})
          .catch(error=>console.log(error))
    }
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
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="contact"> Contact Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to="dashboard">Dashboard</ActiveLink>
      </li>
      <li>
        <ActiveLink to="menu">Our Menu</ActiveLink>
      </li>
      <li>
        <ActiveLink to="order/salad">Order Food</ActiveLink>
      </li>
      {user ? (
        <>
        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
            <img
              className="w-10 rounded-full border-red-600 border mr-2"
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
              }
              alt=""/>
              </div>
          <button onClick={handleLogOut} className="btn-sm  btn-warning rounded">Log Out</button>
        </>
      ) : (
        <>
          <li>
            <ActiveLink to="login">Login</ActiveLink>
          </li>
          <li>
            <ActiveLink to="signup">Sign Up</ActiveLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div
        className={`navbar fixed z-10  ${
          isScrolled
            ? "bg-white text-red-600"
            : "bg-black text-white bg-opacity-50"
        } max-w-screen-xl mx-auto transition-all duration-300 shadow`}
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
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
          <ul className="menu menu-horizontal px-1 font-bold">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;