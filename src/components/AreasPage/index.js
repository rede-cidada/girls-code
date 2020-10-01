import React from 'react';
import './styles.css';

import FrontFigure from '../../assets/frontend_figure.svg';
import BackFigure from '../../assets/backend_figure.svg';

const AreasPage = () => {
    return (
        <div className="container-area">

            <p>Outro conceito que cê vai ver muito por aí: linguagem de programação. A gente vai falar mais dela adiante, mas só pra cê não ficar tão perdida: linguagem de programação são um tipo de "língua" que usamos parar "falar" com o computador. Existem diversas e através delas conseguimos fazer um software executar ações que queremos.</p>

            <section className="frontend">

                <img src={FrontFigure} alt="CSS frontend"></img>

                <div className="front-infos">
                    <h2>Front-End</h2>
                <ul>
                    <li>Aqui você monta os sites e aplicações, visualmente falando. Formação dos textos, cores, imagem. E não para por aí: a parte de interação dos sites também é responsabilidade do FrontEnd. Botões que abrem telas de cadastros, telas de logins, menus...Muito legal, né?</li>
                    <li>Por ser mais visual, muitas vezes as desenvolvedoras FrontEnd trabalham em conjuntos com os UI Designer.</li>
                    <li>As linguagens base são: CSS e JavaScript em conjunto com HTML.</li>
                </ul>

                </div>
               


            </section>

            <section className="backend">

                <img src={BackFigure} alt="Java backend"></img>

                <div className="back-infos">
                    <h2>Back-End</h2>
                <ul>
                    <li>Aqui você monta os sites e aplicações, visualmente falando. Formação dos textos, cores, imagem. E não para por aí: a parte de interação dos sites também é responsabilidade do FrontEnd. Botões que abrem telas de cadastros, telas de logins, menus...Muito legal, né?</li>
                    <li>Por ser mais visual, muitas vezes as desenvolvedoras FrontEnd trabalham em conjuntos com os UI Designer.</li>
                    <li>As linguagens base são: CSS e JavaScript em conjunto com HTML.</li>
                </ul>

                </div>

            </section>
            
        </div>
    )
}

export default AreasPage;
