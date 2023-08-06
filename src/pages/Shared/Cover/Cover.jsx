import React from 'react';
import { Parallax } from "react-parallax";

const Cover = ({img,title,subtitle,tSize}) => {
    return (
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div>
          <div className="hero h-[700px]">
            <div className=""></div>
            <div className="hero-content text-center text-white bg-gray-800 bg-opacity-60 lg:px-36 py-20">
              <div className="max-w-md">
                <h1
                  className={`mb-5 ${tSize} font-bold font-second_font uppercase`}
                >
                  {title}
                </h1>
                <p className="mb-5">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    );
};

export default Cover;