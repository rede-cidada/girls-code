import React, { useState, useEffect } from 'react';
import './style.css';


const dadosGenero = [
    {
        endereco: 'https://previews.123rf.com/images/jozefmicic/jozefmicic1605/jozefmicic160500039/57017829-mulher-de-neg%C3%B3cios-contra-ilustra%C3%A7%C3%A3o-corporativa-do-conceito-de-carreira-de-escada-de-homem-quest%C3%B5es-de-desi.jpg',
        descricao: 'Em gigantes da tecnologia como Facebook, Google, Twitter e Apple, somente 30% do quadro de funcionários é formado por mulheres.'
    },

    {
        endereco: 'https://us.123rf.com/450wm/jozefmicic/jozefmicic1803/jozefmicic180300021/97215673-stock-vector-gender-gap-and-inequality-in-salary-pay-vector-concept-businessman-and-businesswoman-on-piles-of-coi.jpg?ver=6',
        descricao: 'eles representam 87% dos candidatos inscritos em vagas de emprego e as elas apenas 13%.'
    },

    {
        endereco: 'https://thumbs.dreamstime.com/b/business-woman-standing-top-stairs-symbol-businesswoman-challenges-obstacles-barriers-career-corporate-ladder-76779218.jpg',
        descricao: 'as mulheres representam somente 20% dos mais de 580 mil profissionais brasileiros atuando na área de tecnologia da informação.'
    },

    {
        endereco: 'https://st3.depositphotos.com/2697407/12885/v/950/depositphotos_128856668-stock-illustration-business-gender-inequality-concept-with.jpg',
        descricao: '- Desde pequenas, somos condicionadas aos cuidados da casa, enquanto os homens recebem estímulos para salvar o mundo e interagir com tecnologia'
    }
];


const Slider = () => {

    const [dados, setDados] = useState();
    const [page, setPage] = useState(0);

    useEffect(() => {
        setDados(dadosGenero);
    }, [page]);

    const avançar = (page) => page < dados?.length - 1 ? setPage(page + 1) : page;

    const volta = (page) => (page > 0 ? setPage(page - 1) : page);

    return (
        <section className="slider">
            <div className="carrosel">
                {dados && (
                    <>
                        <img className="img-dados" src={dados[page].endereco} />
                        <p className="descriçao-img">{dados[page].descricao}</p>
                    </>
                )}
            </div>

            <div className="countainer-btn">
                <button className="btn" onClick={() => volta(page)}></button>
                <button className="btn" onClick={() => avançar(page)}></button>
            </div>
        </section>
    )

}

export default Slider;
