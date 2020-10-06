import React from 'react';


import "./style.css";

const Logica = () => {
  return (
    <div>
      <section className="logica-area">
        <div className="logica-text">
          <h2>Logica de programação</h2>
          <h3>Por que estudar Logica de programação?</h3>
          <p>
            É o primeiro passo porque isso não muda, independente da linguagem
            que você escolher. Consiste em aprender técnicas para escrever
            códigos que possam ser interpretados por computadores. A seguir tem
            alguns links onde to assistir e entender melhor.{" "}
          </p>

          <a
            href="https://www.youtube.com/watch?v=JaTf3dhx464&t=5s"
            target="_blanck"
          >
            {" "}
            Click aqui para assistir{" "}
          </a>
          <h3>Mas o que é exatamente lógica da programação?</h3>
          <p>
            Lógica é a técnica utilizada para desenvolver instruções em uma
            sequência para atingir determinado objetivo. É a organização e
            planejamento de instruções, em um algoritmo, com o objetivo de
            tornar viável a implementação de um programa ou software.{" "}
          </p>
          <h3>Algoritmo</h3>
          <p>
            O algoritmo é a própria sequência de instruções para a execução de
            uma tarefa. De uma forma mais simples, algoritmo é uma receita ou
            roteiro que indica todos os procedimentos necessários para realizar
            algo ou resolver algum problema.{" "}
          </p>
          <h3>Algoritmo “Batata-frita”</h3>
          <ul>
            <li>Pegar as batatas</li>
            <li>Descascar as batatas</li>
            <li>Cortar as batatas em tiras</li>
            <li>Pegar uma panela</li>
            <li>Colocar óleo na panela</li>
            <li>Acender o fogo do fogão</li>
            <li> Colocar a panela com óleo para esquentar</li>
            <li>Esperar o óleo esquentar</li>
            <li> Colocar as batatas para fritar</li>
            <li>Aguardar o tempo ideal até que as batatas estejam fritas</li>
            <li>Remover as batatas-fritas e servir</li>
            <li>FIM</li>
          </ul>
          <h3>Variáveis e Constantes</h3>
          <p>
            Você já deve ter ouvido falar muito sobre variáveis e constantes
            quando o assunto é programação, não é mesmo?
          </p>
          <p>
            Uma variável é um espaço para armazenar um tipo de dado que pode ser
            modificado quando necessário. Já a constante possuí um dado definido
            no início do programa e não poderá ser alterado.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Logica;