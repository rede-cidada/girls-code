import React from 'react';
import './styles.css';

import FrontFigure from '../../assets/frontend_figure.svg';
import BackFigure from '../../assets/backend_figure.svg';

const AreasPage = () => {
    return (
        <div className="container-areas">

            <section className="frontend">

                <img src={FrontFigure} alt="CSS frontend"></img>

                <div className="front-infos">
                    <h2>Front-End</h2>
                <ul>
                    <li>Aqui você monta os sites e aplicações, visualmente falando. Formação dos textos, cores, imagem. E não para por aí: a parte de interação dos sites também é responsabilidade do FrontEnd;</li>
                    <li>Por ser mais visual, muitas vezes as desenvolvedoras FrontEnd trabalham em conjuntos com os UI Designer;</li>
                    <li>As linguagens base são: CSS e JavaScript em conjunto com HTML;</li>
                </ul>

                </div>
               


            </section>

            <section className="backend">

                <img src={BackFigure} alt="Java backend"></img>

                <div className="back-infos">
                    <h2>Back-End</h2>
                <ul>
                    <li>Aqui você lida com a interação entre servidores e banco de dados. Todo o caminho (como é feito, regras para seguir, segurança) de um dado até a interface do site ou aplicação é responsabilidade do Back;</li>
                    <li>Você não tem contato direto como usuário;</li>
                    <li>As linguagens base são: Java, Python, C++ e várias outras.</li>
                </ul>

                </div>

            </section>
            
        </div>
    )
}

export default AreasPage;
