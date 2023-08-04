import React from 'react';
import chefService from '../../../assets/home/chef-service.jpg'

const MiniBanner = () => {
    return (
      <div className='my-20'>
        <div
          className="hero min-h-[512px]"
          style={{
            backgroundImage: `url(${chefService})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center py-20 px-40 bg-white text-gray-800">
            <div className="max-w-md ">
              <h1 className="mb-5 text-4xl uppercase font-second_font">
                Bistro Boss
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MiniBanner;