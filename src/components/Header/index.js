import React from "react";
import "./styles.css";

import logoIcon from "../../assets/nova-logo.svg";
import { Link } from 'react-router-dom';

// const menuAtv = (input) => {

//   if (input.checked === true) {

//     document.getElementById('navbar').disabled = true;
//   }

// }

const Header = () => {

  return (
    <header className="header">
      <Link to="/"><img src={logoIcon} alt="logo" className="logo-header" /></Link>

      <nav className="navegation">

        <input id="navbar" type="checkbox"/>
        <label htmlFor="navbar">
          <div className="menu">
            <span className="menu-btn"></span>
          </div>
        </label>

        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/guia"><li>Guias</li></Link>
          <Link to="/colaboradores"><li>Colaboradores</li></Link>
          <li>
            {/* <a href="#sobre" onClick={menuAtv()}>Sobre</a> */}
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
