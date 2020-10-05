import React from 'react';
import './styles.css';

const Grupes = () => {
    return (
        <div>
            <div className="grupe-container">

               <section className="grupe-text">

                <h2>Participe dos nossos grupos de estudos!</h2>
                <p>Esses grupos foram pensados para aquelas mulheres que não conseguiram entrar em nenhum curso. Nele você terá contato com outras mulheres, com até história e rotina semelhantes.</p>
                <p className="rotine-info"> <span>ah!</span> Os grupos são pensados seguindo a flexibilidade da sua rotina de estudos: se você tem pouco tempo para estudar ou um horário mais flexivél.</p>

               </section>

               <div className="btn-grupes">
                   <section className="first-btn-grupes">
                    <p>Grupo para quem tem de 30 á 40 minutos livres para estudo.</p>
                    <button className="less-time">Vamos lá!</button>

                   </section>

                   <section className="second-btn-grupes">
                    <p>Grupo para quem tem de 60 minutos á 1 hora e meia para estudo.</p>
                    <button className="more-time">Bora!</button>

                   </section>
                   

                  
               </div>

            </div>
        </div>
    )
}

export default Grupes;
