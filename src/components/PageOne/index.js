import React from "react";
import "./styles.css";

import internetIcon from "../../assets/internet_icon.svg";

const PageOne = () => {
  return (
    <div>
      <section className="page-section">
      <img src={internetIcon} alt="internet"></img>
      <div className="text-info">
        <h1>Você já se perguntou como a internet funciona?</h1>
        <p>
          Ou o que é a internet? Lá vai um segredo: na real, a internet é muito
          mais fisica do que "mágica".
        </p>
      </div>
    </section>
    </div>
    
  );
};

export default PageOne;