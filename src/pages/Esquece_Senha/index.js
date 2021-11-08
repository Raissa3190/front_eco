import React from "react";

import { ContainerPage, TitlePage } from "../../Components/Main";


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
        <Texto>Esqueceu sua Senha?</Texto>
        </li>
        <li>
            <Imagem>
            <img src="../../../logo.png" />

            </Imagem>
       
        </li>
    </ul>
</nav>
</Alinhar>

<h4 style={{marginLeft: 130, marginTop:200}}>Você receberá um e-mail com mais informações de como redefinir sua senha.</h4>
        
        <br/>

        <input placeholder="E-MAIL" style={{ width: "1400px", height: 30, marginLeft: 130}}></input>  



        <Alinhar>
            
            <nav>
                <ul>

                    <li style={{ marginLeft: 600}}>
                      
                            <Link to="/Reset_Senha_Passo_2" style={{ color: "white", textDecoration: "none" }}>
                            <Botao>
                            Enviar E-mail
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
