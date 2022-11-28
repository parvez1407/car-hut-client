import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import CustomerReview from '../CustomerReview/CustomerReview';
import GetUpdate from '../GetUpdate/GetUpdate';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <CustomerReview></CustomerReview>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;