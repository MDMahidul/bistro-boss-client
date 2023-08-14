import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, subtitle, img, tSize }) => {
  return (
    <div>
      {title && (
        <Cover
          title={title}
          tSize={"text-cover-subtitle"}
          subtitle={subtitle}
          img={img}
        ></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link to={`/order/${title}`}>
          <button className="secondary-btn">ORDER YOUR FAVOURITE FOOD</button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;