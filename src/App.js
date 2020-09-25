import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import { Info } from './components/Info';
import { Guia } from './components/Guia';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Slider from './components/slider/Slider';



function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      < Slider />
      <About />
      <Guia />
      <Footer />


    </div>
  );
}

export default App;
