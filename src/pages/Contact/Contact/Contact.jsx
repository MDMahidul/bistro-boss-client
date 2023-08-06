import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/contact/banner.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import {BiSolidPhoneCall} from 'react-icons/bi'
import { FaLocationDot, FaClock, FaPaperPlane } from "react-icons/fa6";

const Contact = () => {
    const [errors,setErrors] = useState('');
    return (
      <div className='mb-20'>
        <Cover
          title={"CONTACT US"}
          subtitle={"To Learn More About Us"}
          tSize={"text-cover-title"}
          img={coverImg}
        ></Cover>
        <section className="my-16">
          <SectionTitle
            heading={"our location"}
            subHeading={"---Visit Us---"}
          ></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto">
            <div className="border pb-8">
              <div className="bg-yellow-600 text-white text-3xl flex justify-center py-4">
                <BiSolidPhoneCall></BiSolidPhoneCall>
              </div>
              <div className="text-gray-800 text-center font-main_font bg-gray-100 w-10/12 mx-auto pt-8 pb-20">
                <p className="uppercase text-2xl font-[500] py-3">phone</p>
                <p className="">+38 (012) 34 56 789</p>
              </div>
            </div>
            <div className="border pb-8">
              <div className="bg-yellow-600 text-white text-3xl flex justify-center py-4">
                <FaLocationDot></FaLocationDot>
              </div>
              <div className="text-gray-800 text-center font-main_font bg-gray-100 w-10/12 mx-auto pt-8 pb-20">
                <p className="uppercase text-2xl font-[500] py-3">address</p>
                <p className="">123 ABS Street, Uni 21, Bangladesh</p>
              </div>
            </div>
            <div className="border pb-8">
              <div className="bg-yellow-600 text-white text-3xl flex justify-center py-4">
                <FaClock></FaClock>
              </div>
              <div className="text-gray-800 text-center font-main_font bg-gray-100 w-10/12 mx-auto pt-8 pb-14">
                <p className="uppercase text-2xl font-[500] py-3">
                  WORKING HOURS
                </p>
                <p className="">
                  Mon - Fri: 08:00 - 22:00
                  <br />
                  Sat - Sun: 10:00 - 23:00
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle
            heading={"contact form"}
            subHeading={"---Send Us a Message---"}
          ></SectionTitle>
          <form className='bg-gray-100 p-5 md:px-16 md:py-20'>
            <div className="grid grid-col-1 lg:grid-cols-2 gap-4 mb-3 ">
              <div className="form-control">
                <label className=" label">
                  <span className="text-gray-800 font-semibold">
                    Name
                    <span className="text-red-600 font-bold"> *</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered bg-white"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className=" label">
                  <span className="text-gray-800 font-semibold">
                    Email
                    <span className="text-red-600 font-bold"> *</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered bg-white"
                  name="email"
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control mb-3">
                <label className=" label">
                  <span className="text-gray-800 font-semibold">
                    Phone
                    <span className="text-red-600 font-bold"> *</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Eenter your phone number"
                  className="input input-bordered bg-white"
                  name="quantity"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className=" label">
                <span className="text-gray-800 font-semibold">
                  Message
                  <span className="text-red-600 font-bold"> *</span>
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered bg-white"
                placeholder="Write your message here"
                required
                name="message"
                rows="5"
              ></textarea>
            </div>
            <span className="label-text-alt text-center text-red-600">
              {errors}
            </span>
            <div className="text-center mt-10">
              <button className="btn bg-yellow-600 text-white text-xl border-0">
                Send Message <FaPaperPlane></FaPaperPlane>
              </button>
            </div>
          </form>
        </section>
      </div>
    );
};

export default Contact;