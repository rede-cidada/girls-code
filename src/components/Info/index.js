import React from 'react';
import '../Info/style.css';
import imageHome from "../../assets/svg-home.svg"

import { Link } from 'react-router-dom';

 

export const Info = () => {
    return(
        <section id="info" className="info">
            <div className="box-info">
                <h1 className="title-info">Girls <span className="span-info">&#60;code&#62;</span></h1>
                <p className="paragraph-info">Nosso objetivo é te trazer para o mundo da tecnologia, topa? Então vem com a gente!</p>

                <Link className="btn-info" to="/login">Cadastre-se</Link>
            </div>
    
            <img className="image-superWoman" src={imageHome} alt="Mulher negra super heroína"/>
            
        </section>
    );
}

