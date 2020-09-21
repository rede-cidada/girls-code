import React from "react";
import "./styles.css";

import logoIcon from "./assets/girls-logo.svg";



const Header = () => {
  return (
    <header className="header">
      <img src={logoIcon} alt="logo" className="logo-header" />

      <nav className="navegation">
    
        <ul>
          <li className="menu-item">
            <a href="#menu">
              Sobre
            </a>
          </li>
          <li className="menu-item">
            <a href="#menu">
              Guias
            </a>
          </li>
          <li className="menu-item">
            <a href="#menu">
              Voluntárias
            </a>
          </li>
          <li className="menu-item">
            <a href="#menu">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
