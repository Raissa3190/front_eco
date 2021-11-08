import React from "react";

import { ContainerPage, TitlePage } from "../../Components/Main";

import {Alinhar, Texto, Imagenzinha,Botao} from './styled'
import {Link} from "react-router-dom";
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
                        <li style={{marginLeft: 109}}>
                        <Texto>Redefina sua senha</Texto>
                        </li>
                        <li>

                                    
                            <Imagenzinha>

                        <img src="../../../logo.png" />
                        </Imagenzinha>
                        </li>
                    </ul>
                </nav>
                <br/><br/><br/><br/>
               <text style={{fontSize: 20, marginLeft: 280, marginTop: 100}}>Insira sua nova senha</text>
               <br/><br/>
            </Alinhar>

            
            <Alinhar>

<nav>
    <ul>
        <li style={{marginLeft: 109}}>
       
<input placeholder="SENHA" style={{ width: "500px", height: 30, marginLeft: 130}}></input> 
        </li>
        <li>                   
        <input placeholder="CONFIRMAR SENHA" style={{ width: "500px", height: 30, marginLeft: 130}}></input>    
        </li>
    </ul>
</nav>

</Alinhar>
<br/><br/>
<Alinhar>
    <nav>
        <ul>

        <li style={{marginLeft: 630}}>

<Link to="/Login_us" style={{ color: "white", textDecoration: "none" }}>
<Botao>
Alterar

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
