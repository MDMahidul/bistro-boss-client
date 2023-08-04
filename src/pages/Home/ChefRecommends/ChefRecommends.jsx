import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import slide1 from '../../../assets/menu/salad-bg.jpg';

const ChefRecommends = () => {
    return (
      <section className='lg:mb-28'>
        <SectionTitle
          subHeading={"---Should Try---"}
          heading={"CHEF RECOMMENDS"}
        ></SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-0">
          <div className="shadow-md bg-gray-100 rounded-md">
            <img className="rounded-t-md" src={slide1} alt="" />
            <div className="text-center space-y-5 px-12 py-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Caeser Salad
              </h3>
              <p className="text-gray-900">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className="btn bg-gray-300 text-yellow-600 text-base border-0 border-b-4 border-yellow-600 bg-opacity-60">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="shadow-md bg-gray-100 rounded-md">
            <img className="rounded-t-md" src={slide1} alt="" />
            <div className="text-center space-y-5 px-12 py-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Caeser Salad
              </h3>
              <p className="text-gray-900">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className="btn bg-gray-300 text-yellow-600 text-base border-0 border-b-4 border-yellow-600 bg-opacity-60">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="shadow-md bg-gray-100 rounded-md">
            <img className="rounded-t-md" src={slide1} alt="" />
            <div className="text-center space-y-5 px-12 py-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Caeser Salad
              </h3>
              <p className="text-gray-900">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className="btn bg-gray-300 text-yellow-600 text-base border-0 border-b-4 border-yellow-600 bg-opacity-60">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ChefRecommends;