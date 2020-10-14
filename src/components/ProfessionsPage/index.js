import React from 'react';
import './styles.css';

const Professsions = () => {
    return (
        <div className="container-profe">

            <section className="profe-text">
                    <h2>E pra onde eu vou, mulher?</h2>
                    <p>Aqui vai algumas profissões que você pode seguir:</p>

            </section>
           
            <section className="profe-list">
                <ul>
                    <li>
                        
                        <h3>Engenheira de Software</h3>
                        <p>Nessa profissão o foco é o desenvolvimento de softwares. Você arquiteta a estrutura do programa, gerencia projetos, desenvolve e realiza testes!</p>
                    
                    </li>

                    <li>
                        
                        <h3>Analista de Sistemas</h3>
                        <p>Aqui você resolve problemas das redes, podendo se relacionar com os sistemas tanto de hardware como de software. É uma mistura de produção de software, negócios e infraestrutura.</p>
                        
                    
                    </li>

                    <li>
                        
                        <h3>Cientista de dados</h3>
                        <p>Aqui você lida diretamente com...dados. A cientista de dados reune, interpreta e passa diversas informações para diversas áreas da empresa contidas nos dados.</p>
                    
                    </li>

                    <li>
                        
                        <h3>Desenvolvedora Front-End</h3>
                        <p>Assim são chamadas as mulheres que desenvolvem para a web. E não são apenas sites, viu? Você também pode trabalhar desenvolvendo aplicações.</p>
                    
                    </li>

                    <li>
                        
                        <h3>Desenvolvedora Back-End</h3>
                        <p>E a galera de Back-End também pode trabalhar em todas essas outras áreas, mas eles são a "galera do fundo". É com eles que rola o tratamento e acesso a banco de dados e muitas outras coisas!</p>
                    
                    </li>

                </ul>

                <p className="more-info"> Tá! Então qual a diferença entre Back e End ? Tem muitas! Vamos explicar a seguir.</p>
            </section>
           
        </div>
    )
}

export default Professsions
