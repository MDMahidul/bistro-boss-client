import React from 'react';
import { FaBook, FaCalendarAlt, FaCalendarPlus, FaCommentAlt, FaEnvelope, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { FaBagShopping, FaBookAtlas } from 'react-icons/fa6';
import { FiMenu} from 'react-icons/fi';
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiUsersThreeFill } from "react-icons/pi";
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

    //todo:load data from the server to have dynamic isAdmin based on data
    const isAdmin = true;

    return (
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>

            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side bg-yellow-600">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full   uppercase font-second_font text-gray-800 text-base">
              <div className="cursor-pointer normal-case font-second_font text-2xl leading-7 ml-2 font-black my-8">
                BISTRO BOSS <br />
                <span className="tracking-[5px]">Restaurant</span>
              </div>
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/">
                      <FaHome></FaHome> Admin home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/reservation">
                      <ImSpoonKnife></ImSpoonKnife> Add Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/payment">
                      <TfiMenuAlt></TfiMenuAlt>manage items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="mycart">
                      <FaBook></FaBook>manage bookings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/allusers">
                      <PiUsersThreeFill></PiUsersThreeFill> all users
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/">
                      <FaHome></FaHome> User home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/reservation">
                      <FaCalendarAlt></FaCalendarAlt> Reservations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/payment">
                      <FaWallet></FaWallet>payment history
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="mycart">
                      <FaShoppingCart></FaShoppingCart>My Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/review">
                      <FaCommentAlt></FaCommentAlt> Add review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/mybookings">
                      <FaCalendarPlus></FaCalendarPlus> My bookings
                    </NavLink>
                  </li>
                </>
              )}
              {/* Sidebar content here */}

              <div className="divider bg-gray-300 h-0.5"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu">
                  <FiMenu></FiMenu> menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/order/salad">
                  <FaBagShopping></FaBagShopping> shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <FaEnvelope></FaEnvelope> contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;