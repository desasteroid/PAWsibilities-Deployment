import React from 'react';
import Navbar from './Nav';
import TagLine from './Tagline';
import CardQuotes from './Cards';
import Reviews from './Review';
import ChooseUs from './Choice';
import FooterComponent from './Footer';
import './Homepage.css';
const Home =()=>{
    return(
        <div>
            <Navbar/>
            <TagLine/>
            <CardQuotes/>
            <Reviews/>
            <ChooseUs/>
            <FooterComponent/>
        </div>
    )
}

export default Home;