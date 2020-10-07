import React from "react";
import "./styles.css";

import logoIcon from "../../assets/nova-logo.svg";

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <img src={logoIcon} alt="logo" className="logo-header" />

      <nav className="navegation">

        <input id="navbar" type="checkbox"></input>
        <label htmlFor="navbar">
          <div className="menu">
            <span className="menu-btn"></span>
          </div>
        </label>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/guia" className="nav-guia" onClick={() => input = true}>Guias</Link>
          </li>
          <li>
            <Link to="/colaboradores">Colaboradores</Link>
       </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#footer">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
