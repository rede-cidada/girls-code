import React, { useState, useEffect } from 'react';
import './style.css';

import imgViolence from '../../assets/image-violence.svg';
import imgQuestions from '../../assets/questions-image.svg';
import imgQuestionsWoman from '../../assets/questions-woman.svg';
import imgStressWoman from '../../assets/stress-woman.svg';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/next.svg';






const dadosGenero = [
    {
        endereco: `${imgQuestionsWoman}`,
        descricao: 'Em gigantes da tecnologia como Facebook, Google, Twitter e Apple, somente 30% do quadro de funcionários é formado por mulheres.'
    },

    {
        endereco: `${imgQuestions}` ,
        descricao: 'Eles representam 87% dos candidatos inscritos em vagas de emprego e elas apenas 13%.'
    },

    {
        endereco: `${imgStressWoman}`,
        descricao: 'As mulheres representam somente 20% dos mais de 580 mil profissionais brasileiros atuando na área de tecnologia da informação.'
    },

    {
        endereco: `${imgViolence}`,
        descricao: 'Desde pequenas, somos condicionadas aos cuidados da casa, enquanto os homens recebem estímulos para salvar o mundo e interagir com tecnologia'
    }
];


const Slide = () => {

    const [dados, setDados] = useState();
    const [page, setPage] = useState(0);

    useEffect(() => {
        setDados(dadosGenero);
    }, [page]);

    const avançar = (page) => page < dados?.length - 1 ? setPage(page + 1) : page;

    const volta = (page) => (page > 0 ? setPage(page - 1) : page);

    return (
        <section className="slide">
            <div className="carrosel">
                {dados && (
                    <>
                        <div className="slide-image">
                            <img className="img-dados" src={dados[page].endereco} />
                        </div>

                        <div className="slide-text">
                            <p className="descricao-img">{dados[page].descricao}</p>
                        </div>
                    </>
                )}
            </div>

            <div className="container-btn">
                    <button className="btn" onClick={() => volta(page)}><img src={leftArrow} className="image-arrow" /></button>
                    <button className="btn" onClick={() => avançar(page)}><img src={rightArrow} className="image-arrow" /></button>
            </div>
        </section>
    )

}

export default Slide;
