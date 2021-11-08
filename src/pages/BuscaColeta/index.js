import React from "react";

import { ContainerPage, TitlePage } from "../../Components/Main";

import {Texto, Alinhar, Caixa_Texto, Imagem, Imagem2} from './styled'

import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'

import NavBar from "../NavBar/Navbar"
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header/index'
const Page = () => {

    const notify = () => toast("Atenção!!, próxima semana será feito novas coletas.");
    return (


<>
<NavBar/>
        <ContainerPage>


            <Alinhar>
                <nav>
                    <ul>
                        <li style={{marginTop: 60}}>

                        <Texto>Coleta Seletiva</Texto>
                        </li>
                        <li>
                                <Imagem>
                                   <img src="../../../logo.png" />
                                </Imagem>

                        </li>
                    </ul>
                </nav>
            </Alinhar>

            <Alinhar>
                <nav>
                    <ul>
                        <li style={{marginTop: 60}}>

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
                        </li>
                        <li>
                        <div style={{marginLeft: -200}}>
                             <Imagem2>
                             <Link to="/BuscaColeta" onClick={notify}>
                                 <img src="../../../Notificação.png" />
                                 
                                 
                                 </Link>
                                 </Imagem2>
                            <ToastContainer />
                        </div>
                        </li>
                    </ul>
                </nav>
            </Alinhar>

            
         
        </ContainerPage>

        </>
    );
}

export default Page;
