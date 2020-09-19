import React from "react";
import "../About/style.css";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about">Sobre Nós</h2>
      <p className="text-about">
        O Girls code surgiu da necessidade de trazer mais mulheres para a área
        de tecnologia. Tendo em vista que essa área tem crescido bastante e
        atingido muitas mulheres, diversas ainda não são alcançadas...e é nelas
        que o Girls code está pensando. Mulheres que são mães, independente de
        idade, mesmo que não saibam nada de tecnologia...viemos mostrar que elas
        também podem! Nossa aplicação traz um guia iniciante em informática e
        conecta diversas mulheres que também estão tentando entrar nesse meio,
        compartilhando histórias. Como surgiu: Quatro jovens mulheres estudantes
        de Front End, com histórias divergentes, mas com um objetivo em comum:
        impulsionar mulheres na área de tecnologia. Idealizadoras:{" "}
        <strong>Ana Julia</strong> 19 anos, começou os estudos sem base nenhuma
        na área de TI. Hoje em dia é uma das fundadoras do Girls code.{" "}
        <strong>Franciele Bernardo</strong> 22 anos, curiosa nata, começou os
        estudos sozinhas na internet e tendo que dividir o tempo entre estudo e
        trabalho. Quis prestar apoio as mulheres que também estão iniciando na
        área. <strong>Ana Beatriz</strong> 20 anos, começou técnico na área de
        TI e o amor por Front-End surgiu. Também esbarrou em outra paixão:
        aumentar o índice de mulheres que atuam na área de tecnologia.{" "}
        <strong>Alice Cavalcanti</strong> 20 anos, estava perdida em qual
        profissão seguir até que se encontrou na programação.
      </p>
    </section>
  );
};

export default About;
