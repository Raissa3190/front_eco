import React from "react";

import {Link} from "react-router-dom";



import {AreaHeader, Texto,Imagem} from './styled';
function Header(){
    return(
        
        <>
       
        <AreaHeader>
        
        
        <div className="container">

            

            <nav>

                <ul>

                <li><Link to="/"style={{color: "orange", textDecoration: "none"}}>Inicio</Link></li>
                    <li><Link to="/Parceiros"style={{color: "orange", textDecoration: "none"}}>Parceiros</Link></li>
                    <li><Link to="/Perguntas"style={{color: "orange", textDecoration: "none"}}>Perguntas </Link></li>
                    
                </ul>
            </nav>
            <div>
               <Texto>
                   <text>Eco Reuse</text>
                </Texto>
               
            </div>
            <div>
            <Texto>
            <input placeholder="Pesquisar" style={{borderRadius: 20, width: "100%", height: 20}}></input>    
            </Texto>    
            
            </div>.
            <Imagem>

<Link to="/Perfil_Usu"style={{color: "orange", textDecoration: "none", marginLeft: 30}}>
<img  src="../../../Img_Perfil.png" />
</Link>

</Imagem>

        </div>
        </AreaHeader>
        </>
    );

}

export default Header;