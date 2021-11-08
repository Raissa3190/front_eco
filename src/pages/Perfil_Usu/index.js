import React from "react";

import { ContainerPage } from "../../Components/Main";
import {Texto, Alinhar, Imagem, Botao} from './styled'

import { Link } from "react-router-dom";

import Header from './Header/index'
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
                                                <Texto>Perfil de Usuário</Texto>
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

<input placeholder="E-MAIL" style={{ width: "1500px", height: 30, marginLeft: 130,marginTop: 150}}></input>    
<input placeholder="NOME" style={{ width: "1500px", height: 30, marginLeft: 130, marginTop: 20}}></input>    
<input placeholder="ENDEREÇO" style={{ width: "1500px", height: 30, marginLeft: 130, marginTop: 20}}></input>    
  
</div>

<Alinhar>


    <nav>
        <ul>
            <li>

            <input placeholder="SENHA" style={{ width: "1500px", height: 30, marginLeft: 50}}></input>    
            </li>
            
        </ul>
    </nav>

</Alinhar>


<Alinhar>

    <nav>
        <ul>
            <li style={{ marginLeft: 600}} >

                <Link to="/Inicial" style={{ color: "white", textDecoration: "none" }}>
                    <Botao>

                    Editar
                    </Botao>
                    </Link>

            </li>
        
        </ul>
    </nav>

</Alinhar>
        </ContainerPage>

        </>
    );
}

export default Page;
