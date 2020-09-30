import React from 'react';
import About from '../../components/About';
import { Guia } from '../../components/Guia';
import { Info } from '../../components/Info';
import Slide from '../../components/Slide';

const Home = () => {
    return (
        <div className="home">
            <Info />
            <Slide />
            < About />
            < Guia />
        </div>
    )
};

export default Home;

