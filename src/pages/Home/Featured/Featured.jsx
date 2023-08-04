import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
      <div className='featured-item bg-fixed pb-10 pt-4 my-16'>
        <section>
          <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"} 
          ></SectionTitle>
          <div className="md:flex justify-center items-center py-8 px-16">
            <div>
              <img className='w-3/4 mx-auto' src={featured} alt="" />
            </div>
            <div className="md:ml-6 text-white">
              <p>March 20, 2023</p>
              <p className='text-xl'>WHERE CAN I GET SOME?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn btn-outline border-0 border-b-2 mt-4 text-white uppercase">read more</button>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Featured;