import React from "react";

import { ContainerPage } from "../../Components/Main";

import {Alinhar, Botao1, Botao2, Imagem, Botao3, Alinhar3 } from './styled'

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
    <Link to="/Cad_emp" style={{ color: "white", textDecoration: "none" }}>
        <Botao1>
        Novo Cadastro
        </Botao1>                    
    </Link>
</li>

<li>

 <Link to="/Login_us" style={{ color: "white", textDecoration: "none" }}>
        <Botao2>
       Sou Usuário
        </Botao2>                    
 </Link>
    
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


<input placeholder="E-mail" style={{ width: "1500px", height: 30, marginLeft: 130,marginTop: 150}}></input>    
<br/><br/><br/>
<input placeholder="Senha" style={{ width: "1500px", height: 30, marginLeft: 130}}></input>    


</div>

<Alinhar3>


    <nav>
        <ul>
            <li style={{ marginLeft: 600}}>
            <Link to="Inicial" style={{ color: "white", textDecoration: "none" }}>
                <Botao3>  
                    Entrar
                </Botao3>
            </Link>
            </li>
        </ul>
    </nav>
</Alinhar3>

           <br/>
           <br/>
           <Link to="/Reset_Senha_Passo_1"style={{ color: "black", textDecoration: "none", marginLeft: 800 }} >
               Esqueceu a senha?
            </Link>
        </ContainerPage>
        
        
</>
    );
}

export default Page;