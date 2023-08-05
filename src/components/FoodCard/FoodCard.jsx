import React from 'react';

const FoodCard = ({item}) => {
    const { name, image, recipe, price } = item;
    return (
      <div>
        <div className="card w-96 bg-white shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <p className='bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-3 py-1 rounded font-semibold'>${price}</p>
          <div className="card-body">
            <div className="text-center space-y-5">
              <h3 className="text-2xl font-semibold text-gray-900">
                {name}
              </h3>
              <p className="text-gray-900">{recipe} </p>
              <button className="btn bg-gray-300 text-yellow-600 text-base border-0 border-b-4 border-yellow-600 bg-opacity-60">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;