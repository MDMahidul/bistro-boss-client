import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import MiniBanner from '../MiniBanner/MiniBanner';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Bistro Boss | Home</title>
        </Helmet>
        <Banner></Banner>
        <Category></Category>
        <MiniBanner></MiniBanner>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <ChefRecommends></ChefRecommends>
        <Featured></Featured>
        <Testimonials></Testimonials>
      </div>
    );
};

export default Home;