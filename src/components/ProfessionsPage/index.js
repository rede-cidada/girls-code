import React from 'react';
import './styles.css';

const Professsions = () => {
    return (
        <div className="container-profe">

            <section className="profe-text">
                    <h2>E pra onde eu vou, mulher?</h2>
                    <p>Como a área de tecnologia é bem grandinha, existem diversas profissões que você pode seguir. Aqui a gente vai listar algumas, mas existem muitas outras, viu? Dá uma pesquisada por fora que cê acha muita coisa!</p>

                    <p>E ah! Pra não confundir: Hardware é a parte física, o celular ou computador, sabe? Já o software são os aplicativos, sistemas e assim vai.</p>


            </section>
           
            <section className="profe-list">
                <ul>
                    <li>
                        
                        <h3>Engenhera de Software</h3>
                        <p>E calma! Você não precisa cursar engenharia! Nessa profissão o foco é o desenvolvimento de softwares. Você desenha e testa o programa.</p>
                    
                    </li>

                    <li>
                        
                        <h3>Analista de Sistemas</h3>
                        <p>Aqui você resolve problemas das redes, podendo se relacionar com os sistemas tanto de hardware como de software. É uma mistura de produção de software, negócios e infraestrutura.</p>
                        
                    
                    </li>

                    <li>
                        
                        <h3>Cientista de dados</h3>
                        <p>Aqui você lida direamente com...dados. A cientista de dados reune, interpreta e passa diversas informações para diversas áreas da empresa contidas nos dados.</p>
                    
                    </li>

                    <li>
                        
                        <h3>Desenvolvedora Front-End</h3>
                        <p>Ser uma desenvolvedora Front-End é meio que uma palavra guarda chuva para quem desenvolve para web. E não são apenas sites, viu? Você também pode trabalhar desenvolvendo aplicativos...as possibilidades são muitas!</p>
                    
                    </li>

                    <li>
                        
                        <h3>Desenvolvedora Back-End</h3>
                        <p>Outro termo guarda chuva já que uma desenvolvedora Back não faz apenas uma coisa: as possibilades também são muitas! Também dá pra trabalhar em dados, sites, aplicativos...</p>
                    
                    </li>

                </ul>

                <p>"Tá! Então qual a diferença entre Back e End?" Tem muitas! Vamos explicar a seguir.</p>
            </section>
        </div>
    )
}

export default Professsions
