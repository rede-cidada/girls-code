import React, { useEffect, useState } from "react";
import axios from "axios";

import Grupes from "../../components/Grupes";

import "./styles.css";

const Profissoes = ['Dev. Front End', 'Dev. Full Stack', 'Dev. Back End', 'Analista de Sistemas', 'Engenheira de Software'];
const sort = Math.floor(Math.random() * (Profissoes.length - 1 ));

const Colaboradores = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataResponse = await axios.get(
        "https://randomuser.me/api/?results=11&gender=female"
      );

      const data = await dataResponse.data.results;
      setDados(data);
    };

    getData();
  }, []);

  return (
    <div className="colaboradores">

      <div className="container">
        <div className="colaboradores-text">
          <h1>Mentoras</h1>
          <p>A Girls code conta com um time de mentoras voluntárias dispostas a te ajudar nessa nova jornada!</p>

        </div>

        <div className="colaboradores-main">

          {dados.map((item, index) => (
            <div className="card" key={index}>
              <div className="info-colaboradores">
                <p className="colaboradores-nome">
                  <strong>{`${item.name.first} ${item.name.last}`}</strong>
                </p>
                <p>{Profissoes[sort]}</p>
                <img
                  src={item.picture.large}
                  alt={`${item.name.first} ${item.name.last}`}
                />
              </div>
              <div className="contatos">
                <p className="mail">{item.email}</p>
                <p>{item.phone}</p>
   
              </div>
            </div>
          ))}
        </div>
      </div>
      < Grupes />
    </div>

    
    
  );
};

export default Colaboradores;
