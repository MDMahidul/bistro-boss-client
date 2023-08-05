import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({ items, title, subtitle, img, tSize }) => {
  return (
    <div>
      {title && (
        <Cover title={title} tSize={'4xl'} subtitle={subtitle} img={img}></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;