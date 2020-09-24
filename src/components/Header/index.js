import React from "react";
import "./styles.css";

import logoIcon from "../../assets/girls-logo.svg";



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
             <a href="#">Guias</a>
           </li>
          <li>
             <a href="#">Colaboradores</a>
          </li>
          <li>
            <a href="#">Sobre</a>
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
