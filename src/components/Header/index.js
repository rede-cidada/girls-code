import React from "react";
import "./styles.css";
import logoIcon from "../../assets/nova-logo.svg";

import { Link } from 'react-router-dom';

const Header = () => {

  return (

    <header className="header">
      <Link to="/"><img src={logoIcon} alt="logo" className="logo-header" /></Link>

      <nav className="navegation">

        <input id="navbar" type="checkbox"></input>
        <label htmlFor="navbar">
          <div className="menu">
            <span className="menu-btn"></span>
          </div>
        </label>

        <ul>
          <li className="list-links">
            <Link className="links-header" to="/">Home</Link>
          </li>
          <li className="list-links">
            <Link className="links-header" to="/guia">Guia</Link>
          </li>
          <li className="list-links">
            <Link className="links-header" to="/colaboradores">Colaboradores</Link>
          </li>
          <li className="list-links">
            <Link className="links-header" to="/login">Cadastre-se</Link>
          </li>
          <li className="list-links">
            <a className="links-header" href="#footer">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};



export default Header;
