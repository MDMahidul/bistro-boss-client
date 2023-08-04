import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
            .then(res=>res.json())
            .then(data=>{
                const popularItems = data.filter(item=>item.category ==='popular');
                setMenu(popularItems);
            })
    },[])
    return (
      <section className="mb-12 mx-2 lg:mx-auto">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {menu.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
            <button className="btn btn-outline border-0 border-b-2 mt-4 text-gray-900 uppercase hover:text-white ">
              View Full Menu
            </button>
        </div>
      </section>
    );
};

export default PopularMenu;