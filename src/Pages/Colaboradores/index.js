import React, { useEffect, useState } from 'react';

const Colaboradores = () => {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const mulheres = await fetch('https://randomuser.me/api/?results=50&gender=female');
            const sla = await mulheres.json();

            setDados(sla);

        }

    }, []);


    return (
        <div className="colaboradores">
            {dados.map(({ gender, name, }) =>
                <section key={gender}>
                </section>
            )}
        </div>
    )
};

export default Colaboradores;