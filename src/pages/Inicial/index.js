import React, {useState} from "react";


import { ContainerPage } from "../../Components/Main";
import 'react-calendar/dist/Calendar.css';
import Calendar from  'react-calendar'
import { Alinhar, Alinhar2, Alinhar3, Imagem, Botao1, Botao2, Botao3, Caixa_Texto, Caixa_Texto2 } from './styled'

import NavBar from "../NavBar/Navbar"





const Page = () => {

    return (


        <>
            <NavBar/>
                <ContainerPage>
                    
                <Alinhar >
                        <nav>
                            <ul>
                                <li style={{marginTop: 20}}>
                                    <Botao1>
                                        Seja Bem-Vindo!
                                    </Botao1>
                                </li>

                                                              
                                <li>
                                    <Imagem>
                                        <img src="../../../logo.png" />
                                    </Imagem>
                            
                                </li>
                                                 
                            </ul>
                        </nav>
                </Alinhar>
                    
                    <div>
                        <Caixa_Texto>
                            Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.
                            
                            “Conjunto de palavras e frases articuladas, escritas sobre qualquer suporte”.[1]

                            “Obra escrita considerada na sua redação original e autêntica (por oposição a sumário, tradução, notas, comentários, etc.)”.[2]

                            "Um texto é uma ocorrência linguística, escrita ou falada de qualquer extensão, dotada de unidade sociocomunicativa, semântica e formal. É uma unidade de linguagem em uso."[3]
                        </Caixa_Texto>
                                    
                    </div>
                        
                        <div>
                            <Alinhar2>
                                <nav>
                                    <ul>
                                        <li>
                                            <Botao2>
                                                Dicas do Dia!
                                            </Botao2>
                                        </li>
                                    </ul>
                                </nav>
                            </Alinhar2>  
                        </div>

                        
                        <div>
                            <Caixa_Texto2>
                                Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.
                                            
                                “Conjunto de palavras e frases articuladas, escritas sobre qualquer suporte”.[1]

                                “Obra escrita considerada na sua redação original e autêntica (por oposição a sumário, tradução, notas, comentários, etc.)”.[2]

                                "Um texto é uma ocorrência linguística, escrita ou falada de qualquer extensão, dotada de unidade sociocomunicativa, semântica e formal. É uma unidade de linguagem em uso."[3]
                            </Caixa_Texto2>
                                    
                        </div>

                        <div>
                            <Alinhar3>
                                <nav>
                                    <ul>
                                        <li style={{marginTop: -350}}>
                                            <Botao3>
                                                AGENDA
                                            </Botao3>
                                            <div style={{width: 600, marginLeft: 1233 }}>
                                            <Calendar/>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </Alinhar3>  
                        </div>
                                    
                </ContainerPage>                
        
        </>
    );
}

export default Page;
