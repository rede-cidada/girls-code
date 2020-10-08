import React from 'react';

import "./styles.css";

const Cursos = () => {
  return (
    <div>
      <section className="cursos-area">
        <div className="cursos-text">
          <h2>Lista de cursos</h2>

          <p>
            Aqui vai uma lista de curso que você pode fazer na area da
            Tecnologia.
          </p>
        </div>

        <div className="lista-cursos">
          <button className="reprograma">
            <a href="https://reprograma.com.br/" target="_blanck">
              {" "}
              &#123;Reprograma&#125;
            </a>
          </button>

          <button className="programaria">
            <a href="https://www.programaria.org/" target="_blanck">
              Progra<span>&#123;M&#125;</span>aria
            </a>{" "}
          </button>

          <button className="laborato">
            <a href="https://www.laboratoria.la/br" target="_blanck">
              <span className="seta"> &lt; </span> Laboratoria{" "}
              <span className="seta"> &gt; </span>{" "}
            </a>{" "}
          </button>

          <button className="pyladies">
            <a href="https://brasil.pyladies.com/" target="_blanck">
              PyLadies{" "}
            </a>
          </button>

          <button className="minas">
            <a
              href="https://www.instagram.com/uxparaminaspretas/?hl=pt"
              target="_blanck"
            >
              UX para Minas Pretas{" "}
            </a>{" "}
          </button>

          <button className="codena">
            {" "}
            <a href="https://www.codenation.dev/" target="_blanck">
              {" "}
              Codenation{" "}
            </a>{" "}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cursos;

