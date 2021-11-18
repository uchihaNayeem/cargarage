import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <h1 className='text-center pt-5'>Services</h1>
            <Services/>
            <h1 className='text-center pt-5'>Our Mechanics</h1>
            <Experts/>
        </div>
    );
};

export default Home;