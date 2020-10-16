import React from "react";
import "./styles.css";

const InternetPage = () => {
  return (
    <div className="internet-area">
      <section className="internet-texto">
        <h2>Mas vamos lá, o que é a internet?</h2>
        <p>Essa playlist rapidinha aqui vai te deixar a pá dos conceitos, olha só:</p>       
      </section>

      <section className="internet-video">
        <iframe
        title="Como a internet funciona"
        width="100%" 
        height="300" 
        src="https://www.youtube.com/embed/HNQD0qJ0TC4?list=PLQq8-9yVHyOYMFAc9v7Yb_cqmNMksEdrk" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

        </iframe>

        <p>Entender isso é só um dos primeiros passos pra quem quer entender mais desse mundão que á a área de tecnologia. Mas não se afobe não, viu?</p>
      </section>
    </div>
  );
};

export default InternetPage;