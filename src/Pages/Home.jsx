import React from 'react';
import Banner from '../Components/Banner/Banner';
import AboutSection from '../Components/About/AboutSection';
import ThreeTabs from '../Components/threeTabs/threeTabs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <ThreeTabs></ThreeTabs>
        </div>
    );
};

export default Home;