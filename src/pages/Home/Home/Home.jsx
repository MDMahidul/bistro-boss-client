import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import MiniBanner from '../MiniBanner/MiniBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <MiniBanner></MiniBanner>
        </div>
    );
};

export default Home;