import React from 'react';
import "../Footer/style.css";
import Logo from "../../assets/nova-logo.svg";
import imageConnetions from "../../assets/conects-woman.svg";
import heartImage from "../../assets/heart.svg";
import iconFacebook from "../../assets/icon-facebook.svg";
import iconInstagram from "../../assets/icon-instagram.svg";
import iconTwitter from "../../assets/icon-twitter.svg";




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
          <p className="paragraph-sobre">Conectando mulheres <span><img className="heart-icon" src={heartImage} alt=""/></span></p>
        </div>

        <div className="box-contato">
          <h4 className="title-footer">Fale com a gente:</h4>
          <p className="paragraph-footer">girlscode@gmail.com</p>
        </div>

        <div className="box-contato">
          <h4 className="title-footer">Nossas redes sociais:</h4>

          <div className="box-icons"> 
           <img className="icons-footer" src={iconFacebook} alt="Ícone do facebook"/> 
           <img className="icons-footer" src={iconInstagram} alt="Ícone do instagram"/>
           <img className="icons-footer" src={iconTwitter} alt="Ícone do twitter"/> 

          </div>
           



        </div>

      </div>

        <div className="box-connections">
           <img className="image-connections" src={imageConnetions} alt="Mulheres conectadas"/>
        </div>

        </div>

        <span className="span-copy">&copy; Girls code 2020</span>
    </footer>

    )
}

export default Footer;