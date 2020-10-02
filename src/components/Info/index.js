import React from 'react';
import '../Info/style.css';
import superWoman from "../../assets/super_woman.svg"

 

export const Info = () => {
    return(
        <section className="info">
            <img className="image-superWoman" src={superWoman}/>

            <div className="box-info">
                <h1 className="title-info">Girls <span className="teste">&#60;code&#62;</span></h1>
                <p className="paragraph-info">Nosso objetivo é te trazer para o mundo de TI mulher, topa? Então vem com a gente!</p>
            </div>
        </section>
    );
}

