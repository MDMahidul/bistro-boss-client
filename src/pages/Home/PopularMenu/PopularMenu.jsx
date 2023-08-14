import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item=>item.category === 'popular');
    /* const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
            .then(res=>res.json())
            .then(data=>{
                const popularItems = data.filter(item=>item.category ==='popular');
                setMenu(popularItems);
            })
    },[]) */
    return (
      <section className="mb-12 mx-2 lg:mx-auto">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link to="/menu" className="secondary-btn">
            View Full Menu
          </Link>
        </div>
      </section>
    );
};

export default PopularMenu;