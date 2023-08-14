import React from 'react';
import { FaCalendarAlt, FaCalendarPlus, FaCommentAlt, FaEnvelope, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { FiMenu} from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-yellow-600  uppercase font-second_font text-gray-800 text-base">
              {/* Sidebar content here */}
              <div className="cursor-pointer normal-case font-second_font text-2xl leading-7 ml-2 font-black mb-10 mt-8">
                BISTRO BOSS <br />
                <span className="tracking-[5px]">Restaurant</span>
              </div>
              <li>
                <Link>
                  <FaHome></FaHome> User home
                </Link>
              </li>
              <li>
                <Link>
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </Link>
              </li>
              <li>
                <Link>
                  <FaWallet></FaWallet>payment history
                </Link>
              </li>
              <li>
                <Link>
                  <FaShoppingCart></FaShoppingCart>My Cart
                </Link>
              </li>
              <li>
                <Link>
                  <FaCommentAlt></FaCommentAlt> Add review
                </Link>
              </li>
              <li>
                <Link>
                  <FaCalendarPlus></FaCalendarPlus> Add review
                </Link>
              </li>
              <div className="divider bg-gray-300 h-0.5"></div>
              <li>
                <Link to="/">
                  <FaHome></FaHome> home
                </Link>
              </li>
              <li>
                <Link to="/menu">
                  <FiMenu></FiMenu> menu
                </Link>
              </li>
              <li>
                <Link to="/order/salad">
                  <FaBagShopping></FaBagShopping> shop
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <FaEnvelope></FaEnvelope> contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;