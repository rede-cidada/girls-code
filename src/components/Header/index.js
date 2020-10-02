import React from "react";
import "./styles.css";

import logoIcon from "../../assets/girls-logo.svg";

import { Link } from 'react-router-dom';

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import Guia from './Pages/Guia';
// import Colaboradores from './Pages/Colaboradores';


const Header = () => {
  return (
    <header className="header">
      <img src={logoIcon} alt="logo" className="logo-header" />

      <nav className="navegation">

        <input id="navbar" type="checkbox"></input>
        <label for="navbar">
          <div className="menu">
            <span className="menu-btn"></span>
          </div>
        </label>

        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/guia"}>Guias</Link>
          </li>
          <li>
            <a href="#">Colaboradores</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
