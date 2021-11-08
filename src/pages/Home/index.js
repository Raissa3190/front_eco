import React from "react";

import { Imagenzinha, ContainerPage, Alinhar, Caixa_Texto, Botao_2, Botao_1 } from './styled';

import Header from '../../Components/Header';

import NavBar from "../NavBar/Navbar"
import { Link } from "react-router-dom";

const Page = () => {

    return (

<>
        
     
        <NavBar/>
            <Imagenzinha>
                <img src="../../../logo.png" />
            </Imagenzinha>
            <div>
                <Alinhar>
                    <nav>

                        <ul style={{marginLeft: 200}}>


                            <Caixa_Texto>
                                Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.

                                “Conjunto de palavras e frases articuladas, escritas sobre qualquer suporte”.[1]

                                “Obra escrita considerada na sua redação original e autêntica (por oposição a sumário, tradução, notas, comentários, etc.)”.[2]

                                "Um texto é uma ocorrência linguística, escrita ou falada de qualquer extensão, dotada de unidade sociocomunicativa, semântica e formal. É uma unidade de linguagem em uso."[3]

                                O interesse pelo texto como objeto de estudo gerou vários trabalhos importantes de teóricos da Linguística Textual, que percorreram fases diversas cujas características principais eram transpor os limites da frase descontextualizada da gramática tradicional e ainda incluir os relevantes papéis do autor e do leitor na construção de textos.

                                Um texto pode ser escrito ou oral e, em sentido lato, pode ser também não verbal.

                                Texto crítico é uma produção textual que parte de um processo reflexivo e analítico gerando um conteúdo com crítica construtiva e bem fundamentada.

                                Em artes gráficas, o texto é a parte verbal, linguística, por oposição às ilustrações.

                                Todo texto tem que ter alguns aspectos formais, ou seja, tem que ter estrutura, elementos que estabelecem relação entre si. Dentro dos aspectos formais temos a coesão e a coerência, que dão sentido e forma ao texto. "A coesão textual é a relação, a ligação, a conexão entre as palavras, expressões ou frases do texto”.[4] A coerência está relacionada com a co

                            </Caixa_Texto>
                            <li style={{ marginLeft: 500 }}>


                            <Link to="/Login_us" style={{ color: "white", textDecoration: "none" }}>            

                                    <Botao_1>
                                        
                                            Sou usuário
                                    
                                    </Botao_1>                                    
                                
                            </Link>

                                <Link to="/Login_emp" style={{ color: "white", textDecoration: "none" }}>
                               
                                    <Botao_2>
                                        
                                            Sou empresa
                                        
                                    </Botao_2>
                               
                                </Link>
                            </li>

                        </ul>

                    </nav>
                </Alinhar>

            </div>

        </>
    );
}

export default Page;
