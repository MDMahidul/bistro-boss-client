import React from 'react';
import { FaBeer, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../../../App.css'


const Footer = () => {
    return (
      <div>
        <footer className=" grid lg:grid-cols-2 grid-cols-1  bg-neutral text-center font-main_font text-white">
          <div className="bg-gray-700 py-20 lg:pl-28">
            <h2 className="text-3xl font-[500] mb-6">CONTACT US</h2>
            <p className="text-base leading-8">
              123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br />
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
          <div className="bg-gray-900 text-center py-20 lg:pr-28">
            <h2 className="text-3xl font-[500] mb-5">Follow US</h2>
            <p className="text-xl pb-7">Join us on social media</p>
            <div className="flex gap-6 justify-center text-2xl">
              <FaFacebookF></FaFacebookF>
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
            </div>
          </div>
        </footer>
        <footer className="footer footer-center p-4 bg-[#151515] text-white">
          <div>
            <p>Copyright © 2023 - All right reserved by BISTRO BOSS</p>
          </div>
        </footer>
      </div>
    );
};

export default Footer;