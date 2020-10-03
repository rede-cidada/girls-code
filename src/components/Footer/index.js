import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import "../Footer/style.css";
import Logo from "../../assets/nova-logo.svg";
import imageConnetions from "../../assets/conects-woman.svg";


const Footer = () => {
    return(
      <footer id="footer" className="footer">

        <div className="main-container-footer">

      <div className="container-footer">

        <div className="box-imageFooter">
          <img src={Logo} alt="Logo Girls code"/>
        </div>


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

        <div className="box-connections">
           <img className="image-connections" src={imageConnetions} alt="Mulheres conectadas"/>
           <h3 className="title-connections">Conectamos mulheres s2</h3>
        </div>

        </div>

        <span className="span-copy">&copy; Girls code 2020</span>
    </footer>

    )
}

export default Footer;