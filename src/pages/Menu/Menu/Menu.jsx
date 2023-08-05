import React from 'react';
import { Helmet } from "react-helmet-async";
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter((item) => item.category === "dessert");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");
    return (
      <div>
        <Helmet>
          <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover
          img={menuImg}
          title={"OUR MENU"}
          subtitle={"Would you like to try a dish?"}
          tSize={"7xl"}
          height={"800px"}
        ></Cover>
        {/* offered menu */}
        <div>
          <SectionTitle
            subHeading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
          ></SectionTitle>
          <MenuCategory items={offered}></MenuCategory>
          <div className="flex justify-center items-center mt-6">
            <button className="btn btn-outline border-0 border-b-2 mt-4 text-gray-900 uppercase hover:text-white ">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
        {/* Desseret menu */}
        <div className="mt-12">
          <MenuCategory
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley."
            }
            title={"dessert"}
            items={desserts}
            img={dessertImg}
          ></MenuCategory>
          <div className="flex justify-center items-center mt-6">
            <button className="btn btn-outline border-0 border-b-2 mt-4 text-gray-900 uppercase hover:text-white ">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
        {/* Pizza menu */}
        <div className="mt-12">
          <MenuCategory
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley."
            }
            title={"pizza"}
            items={pizza}
            img={pizzaImg}
          ></MenuCategory>
          <div className="flex justify-center items-center mt-6">
            <button className="btn btn-outline border-0 border-b-2 mt-4 text-gray-900 uppercase hover:text-white ">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
        {/* salad menu */}
        <div className="mt-12">
          <MenuCategory
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley."
            }
            title={"salad"}
            items={salad}
            img={saladImg}
          ></MenuCategory>
          <div className="flex justify-center items-center mt-6">
            <button className="btn btn-outline border-0 border-b-2 mt-4 text-gray-900 uppercase hover:text-white ">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
        {/* soup menu */}
        <div className="mt-12 mb-14">
          <MenuCategory
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley."
            }
            title={"soup"}
            items={soup}
            img={soupImg}
          ></MenuCategory>
          <div className="flex justify-center items-center mt-6">
            <button className="btn btn-outline border-0 border-b-2 mt-4 text-gray-900 uppercase hover:text-white ">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
      </div>
    );
};

export default Menu;