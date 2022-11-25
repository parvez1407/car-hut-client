import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import GetUpdate from '../GetUpdate/GetUpdate';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;