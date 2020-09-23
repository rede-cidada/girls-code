import React from "react";
import "../Guia/style.css"

export const Guia = (props) => {
  return (
    <section className="section-guia">
        <div className="box-guia">
        <p className="paragraph-guia">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
        </p>
        <a href="/" className="link-guia">
            {props.name}
        </a>
        </div>
    </section>
  );
};