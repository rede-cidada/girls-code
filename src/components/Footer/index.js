import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import "../Footer/style.css";
import Logo from "../../assets/girls-logo.svg";


const Footer = () => {
    return(
      <footer className="footer">
      <div className="box-imageFooter">
        <img src={Logo} alt="Logo Girls code"/>
      </div>

      <div className="container-footer">

        <div className="box-sobreNos">
          <h4 className="title-footer">Girls Code</h4>
          <a className="link-sobre" href="/">Sobre nós</a>
        </div>

        <div className="box-contato">
          <h4 className="title-footer">Fale com a gente:</h4>
          <p className="paragraph-footer">girlscode@gmail.com</p>
        </div>

        <div className="box-contato">
          <h4 className="title-footer">Nossas redes sociais:</h4>
          <p className="paragraph-footer">girlscode@gmail.com</p>
        </div>
      </div>
     
      <span className="span-copy">&copy; Girls code 2020</span>
    </footer>

    )
}

export default Footer;