import React from "react";

import { ContainerPage } from "../../Components/Main";

import {Link} from "react-router-dom";

import {Texto, Imagem, Alinhar, Alinhar2} from './styled'

import Header from './Header/index';

import Dropdown from 'react-dropdown';

import NavBar from "../NavBar/Navbar"

const options = [
    'Selecione uma opção','Pergunta1', 'Pergunta2', 'Pergunta3'
 ];
 const defaultOption = options[0];


const Page = ({alert})  =>  {


    return (


        <>
            <NavBar/>
                    <ContainerPage>

                        <Alinhar>
                            <nav>
                                <ul>
                                    <li>
                                        <Texto>
                                            Perguntas

                                        </Texto>
                                    
                                    
                                        <Imagem>
        
                                            <img src="../../../logo.png" />
        
                                        </Imagem>
    
                                    </li> 
                                    
                                </ul>

                            </nav>

                            
                        </Alinhar>                                              
                        
                   
                        <Alinhar2>
                                 
                        <div style={{width: 700, marginLeft: 300, marginTop: 50}}>
                            <Dropdown options={options} value={defaultOption}  />
                        </div>           
                                
                            
                        </Alinhar2>
                    </ContainerPage>


                      
                    
        </>
    );

}
    


export default Page;
