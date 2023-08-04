import React from 'react';

const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-xl font-second_font text-gray-800">
          {name}-----------
        </h3>
        <p className='text-gray-500'>{recipe}</p>
      </div>
      <p className="text-xl font-second_font text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;