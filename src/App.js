import React from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Guia from './Pages/Guia';
import Colaboradores from './Pages/Colaboradores';


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/guia"><Guia/></Route>
                    <Route exact path="/colaboradores"><Colaboradores/></Route>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
  );
}

export default App;
