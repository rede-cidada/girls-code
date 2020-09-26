import React from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

import Routes from './routes';



function App() {
  return (
    <div className="App">
      <Header />
      < Routes />
      <Footer />


    </div>
  );
}

export default App;
