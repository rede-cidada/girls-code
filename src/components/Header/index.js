import React from "react";
import "./styles.css";

import logoIcon from "../../assets/nova-logo.svg";

import { Link } from 'react-router-dom';
import { useState } from "react";

const Header = () => {

  const [open, setOpen] = useState(false);

  return (

    <header className="header">
      <Link to="/"><img src={logoIcon} alt="logo" className="logo-header" ></Link>

      <button className="button-hamburguer" onClick={() => setOpen(!open)} >
          <div className={`menu-btn ${open ? 'one-open' : 'line-close'}`} />

          <div className={`menu-btn ${open ? 'two-open' : 'two-close'}`} />

          <div className={`menu-btn ${open ? 'three-open' : 'line-close'}`} />
        </button>

      <nav className={`navegation ${open ? 'nav-show' : ''}`}>
        <ul className="menu-list">


          <li onClick={() => setOpen(false)} className="list-links">
            <Link className="links-header" to="/">Home</Link>
          </li>

          <li onClick={() => setOpen(false)} className="list-links">
            <Link className="links-header" to="/guia">Guias</Link>
          </li>

          <li onClick={() => setOpen(false)} className="list-links">
            <Link className="links-header" to="/colaboradores">Colaboradores</Link>
          </li>

          <li onClick={() => setOpen(false)} className="list-links">
            <Link className="links-header" to="/login">Cadastre-se</Link>

          </li>

          <li onClick={() => setOpen(false)} className="list-links">
            <a className="links-header" href="#footer">Contato</a>
          </li>

        </ul>
      </nav>
    </header>
  );
};



export default Header;
