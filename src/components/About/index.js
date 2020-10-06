import React from "react";
import "../About/style.css";

const About = () => {
  return (
    <section id="sobre" className="about-section">
      <div>
        <h2>Agora vem cá pra eu te contar!</h2>

        <p className="first-text">
          A <span id="girls">Girls</span><span id="code">&#60;code&#62;</span> surgiu da vontade de quatro alunas de programação de trazer mais mulheres para a área de tecnologia, guiando nos primeiros passos e montando essa rede de apoio massa entre mulheres iniciantes!
        </p>

        <p>
          E aliás... você <span id="enfase">pode</span> não saber nada sobre essa área ainda e tá tudo bem! Cola com a gente que é sucesso.
        </p>

      </div>
    </section>
  );
};

export default About;
