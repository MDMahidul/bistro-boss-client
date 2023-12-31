import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode,Pagination } from "swiper/modules";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
      <>
        <section>
          <SectionTitle
            subHeading={"---From 11:00am to 10:00pm---"} heading={'ORDER ONLINE'}
          ></SectionTitle>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            /* centeredSlides={true} */
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper mb-20 "
          >
            <SwiperSlide>
              <img src={slide1} alt="" />
              <h3 className="lg:text-3xl lg:-m-16 -m-10 text-center text-gray-600 font-second_font">
                SALADS
              </h3>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide2} alt="" />
              <h3 className="lg:text-3xl lg:-m-16 -m-10 text-center text-gray-600 font-second_font">
                PIZZAS
              </h3>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide3} alt="" />
              <h3 className="lg:text-3xl lg:-m-16 -m-10 text-center text-gray-600 font-second_font">
                SOUPS
              </h3>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide4} alt="" />
              <h3 className="lg:text-3xl lg:-m-16 -m-10 text-center text-gray-600 font-second_font">
                DESSERTS
              </h3>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide5} alt="" />
              {/*  <h3 className='lg:text-3xl lg:-m-16 -m-10 text-center text-gray-600 font-second_font'>SALADS</h3> */}
            </SwiperSlide>
          </Swiper>
        </section>
      </>
    );
};

export default Category;