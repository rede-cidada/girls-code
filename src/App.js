import React from 'react';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
      <h1>Girls code</h1>
      <Header />
      <About/>
      <Footer />
    </div>
  );
}

export default App;
