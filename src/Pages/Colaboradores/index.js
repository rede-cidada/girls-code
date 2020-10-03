import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";

const Colaboradores = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataResponse = await axios.get(
        "https://randomuser.me/api/?results=8&gender=female"
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
                <p>O Girls code conta com um time de mentoras voluntárias dispostas a te ajudar nessa nova jornada!</p>
                
            </div>

            <div className="colaboradores-main">

                {dados.map((item, index) => (
                <div className="card" key={index}>
                    <div className="info">
                    <p className="colaboradores-nome">
                        <strong>{`${item.name.first} ${item.name.last}`}</strong>
                    </p>
                    <p>Dev. Front End</p>
                    <img
                        src={item.picture.large}
                        alt={`${item.name.first} ${item.name.last}`}
                    />
                    </div>
                <div className="contatos">
                    <p className="mail">{item.email}</p>
                    <p>{item.phone}</p>
                    <button>contato</button>
                </div>
            </div>
            ))}
            </div>
       
      </div>
    </div>
  );
};

export default Colaboradores;
