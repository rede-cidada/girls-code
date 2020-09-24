import React from "react";
import "../Guia/style.css"

export const Guia = () => {
  return (
    <section className="section-guia">
        <div className="box-guia">
        <p className="paragraph-guia">
            Aqui tu encontra o nosso mini guia sobre essa área e indicações de cursos gratuitos pra tu conhecer esse universo lindo.
        </p>
        <a href="/" className="link-guia">
            guia de estudos
        </a>
        </div>

        <div className="box-guia box-guia-style ">
        <p className="paragraph-guia">
           E ó a gente não é pouca coisa não! Também temos mentoras voluntárias pra te ajudar nesse processo.
        </p>
        <a href="/" className="link-guia">
            Colaboradores
        </a>
        </div>
    </section>
  );
};