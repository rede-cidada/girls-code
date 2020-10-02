import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style.css'

const Colaboradores = () => {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const dataResponse = await axios.get(
                "https://randomuser.me/api/?results=15&gender=female"
            );

            const data = await dataResponse.data.results;
            setDados(data);
        };

        getData();
    }, []);

    return (
        <div className="colaboradores">
            <h1>Colaboradores</h1>
            {dados.map((item, index) =>
                <div className="card" key={index}>
                    <div className="info">
                        <img src={item.picture.large} alt={`${item.name.first} ${item.name.last}`} />
                        <p><strong>{`${item.name.first} ${item.name.last}`}</strong></p>
                    </div>
                    <div className="contatos">
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <button>Entrar em contato</button>
                    </div>

                </div>
            )}
        </div>
    )
};

export default Colaboradores;