import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import "../Footer/style.css";
import Logo from "../../assets/girls-logo.svg";


const Footer = () => {
    return(
        <div>
          <footer>

              <section className="footerImg">
                <img src={Logo} alt="logo" />
                
              </section>
              
              <section className="contatos">
                <ul>
                  <h3>Franciele Bernado</h3>

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
                  <h3>Alice Cavalcanti</h3>
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
            

          
              <p className="rodape">&copy;2020 GIRLS CODE</p>
            

          </footer>
    </div>
    )
   
}

export default Footer;