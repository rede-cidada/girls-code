import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import "./footer.css";
import Logo from "./Logo.svg";


const Footer = () => {
    return(
        <div>
      <footer>
        <section className="footerTodo">
          <section className="footerTexto">
            <img src={Logo} alt="logo" />
            <p>
              Eu não saio por aí procurando encrenca. Em geral as encrencas é
              que vêm ao meu encontro.{" "}
            </p>
            <strong>- Girll Code</strong>
          </section>
          <section className="contatos">
            <ul>
              <h3>Franciele</h3>

              <li>
                <a
                  href="https://github.com/FranBernardo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="icon" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/fran_bernardo_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="icon" />
                </a>
              </li>
            </ul>
            <ul>
              <h3>Alice</h3>
              <li>
                <a href="#">
                  <AiFillGithub className="icon" />
                </a>
              </li>

              <li>
                <a href="#">
                  <AiFillLinkedin className="icon" />
                </a>
              </li>
            </ul>
            <ul>
              <h3>Ana Beatriz</h3>
              <li>
                <a href="#">
                  <AiFillGithub className="icon" />
                </a>
              </li>

              <li>
                <a href="#">
                  <AiFillLinkedin className="icon" />
                </a>
              </li>
            </ul>
            <ul>
              <h3>Ana Julia</h3>
              <li>
                <a href="#">
                  <AiFillGithub className="icon" />
                </a>
              </li>

              <li>
                <a href="#">
                  <AiFillLinkedin className="icon" />
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section className="rodape">&copy;2020 GRIL CODE</section>
      </footer>
    </div>
    )
   
}

export default Footer;