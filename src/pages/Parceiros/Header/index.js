import React from "react";

import {Link} from "react-router-dom";

import {AreaHeader, Texto} from './styled';
function Header(){
    return(
        
        <AreaHeader>
        
        <div className="container">

            

            <nav>

                <ul>

                    <li><Link to="/" style={{color: "orange", textDecoration: "none"}}>Início</Link></li>
                 
                    <li><Link to="/Contato"style={{color: "orange", textDecoration: "none"}}>Contato</Link></li>
                    <li><Link to="/Perguntas"style={{color: "orange", textDecoration: "none"}}>Perguntas </Link></li>
                </ul>
            </nav>
            <div>
               <Texto>Eco Reuse</Texto>
              
            </div>
            <div>
            <Texto>
            <input placeholder="Pesquisar" style={{borderRadius: 20, width: "100%", height: 20}}></input>    
            </Texto>    
            </div>.


        </div>
        </AreaHeader>
    );

}

export default Header;