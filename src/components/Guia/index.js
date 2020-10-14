import React from "react";
import "../Guia/style.css";
import { Link } from "react-router-dom";


export const Guia = () => {
  return (
    <section className="section-guia">
      <h2 className="title-guia">Se liga mulher!</h2>

    <div className="main-box">
      <div className="box-guia">
        <p className="paragraph-guia">
          Aqui tu encontra o nosso mini guia sobre essa área e indicações de cursos gratuitos pra tu conhecer esse universo lindo.
        </p>
        <Link to='/guia' className="link-guia">
          guia de estudos
        </Link>
      </div>

    <div className="box-guia box-guia-style ">
        <p className="paragraph-guia">
          E ó a gente não é pouca coisa não! Também temos mentoras voluntárias pra te ajudar nesse processo.
        </p>
        <Link to={`/colaboradores`} className="link-guia">
          Colaboradores
        </Link>
      </div>
      </div>
    </section>
  );
};