import React from 'react';
import About from '../../components/About';
import { Guia } from '../../components/Guia';
import { Info } from '../../components/Info';
import Slider from '../../components/slider/Slider';

const Home = () => {
    return (
        <div className="home">
            <Info />
            < Slider />
            < About />
            < Guia />
        </div>
    )
};

export default Home;

