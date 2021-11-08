import React from "react";


import { ContainerPage, TitlePage } from "../../Components/Main";

import { Link } from "react-router-dom";

import {Texto, Imagem, Alinhar, TextoInforma, Botao, Img_Ico, Img_Ico2} from './styled'

import Header from './Header/index'

import {Seila} from './styled'
import NavBar from "../NavBar/Navbar"
const Page = () => {

    return (


<>

<NavBar/>
        <ContainerPage>

            <Alinhar>


                <nav>
                    <ul>
                        <li>
                        <Texto>Fale Conosco</Texto>

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
                        <li>

                            <TextoInforma>
                                Assunto
                            </TextoInforma>
                            <input  style={{ width: "900px", height: 30, marginLeft: 130, marginBottom: 20}}></input>  
                            
                            <TextoInforma>
                                Tema
                            </TextoInforma>
                            <input  style={{ width: "900px", height: 30, marginLeft: 130}}></input>  
                            <TextoInforma>
                              Mensagem
                            </TextoInforma>
                            <input  style={{ width: "900px", height: 30, marginLeft: 130, height: 200 }}></input>  
                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                                    <Botao>

                                        Enviar
                                    </Botao>
                            </Link>
                        </li>
                        <li style={{marginTop: 150, marginLeft: 200}}>
                        <Img_Ico2>
                            <img src="../../../Img_Mensagem.png" />
                            </Img_Ico2>
                           
                            <li style={{marginTop: -65, marginLeft: -50}}>

                            <TextoInforma>Lorem.ipsum@dolor</TextoInforma>
                           
                           
                            </li>
                            <br/><br/><br/><br/><br/><br/>
                            <Img_Ico>
                            <img src="../../../Img_Tel.png" />
                            </Img_Ico>
                               <li style={{marginTop: -60, marginLeft: -60}}>
                               
                               <TextoInforma> (83)90000-0000</TextoInforma>
                               </li>


                               

                        </li>
                    </ul>
                </nav>
            </Alinhar>
         
        </ContainerPage>
        
        </>
    );
}

export default Page;
