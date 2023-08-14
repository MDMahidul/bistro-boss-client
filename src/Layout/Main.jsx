import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter =
      location.pathname.includes("login") ||
      location.pathname.includes("signup");
    return (
      <div>
        {noHeaderFooter || <Navbar></Navbar>}
        <div className="max-w-screen-xl mx-auto">
          <Outlet></Outlet>
        </div>
        {noHeaderFooter || <Footer></Footer>}
      </div>
    );
};

export default Main;