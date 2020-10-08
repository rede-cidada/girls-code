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
            <Link to="/guia">Guias</Link>
          </li>
          <li>
            <Link to="/colaboradores">Colaboradores</Link>
          </li>
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
