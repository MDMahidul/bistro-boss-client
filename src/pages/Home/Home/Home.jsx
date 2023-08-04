import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import MiniBanner from '../MiniBanner/MiniBanner';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <MiniBanner></MiniBanner>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
        </div>
    );
};

export default Home;