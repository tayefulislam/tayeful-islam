import React from 'react';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe';
import MyProjects from './MyProjects';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </>
    );
};

export default Home;