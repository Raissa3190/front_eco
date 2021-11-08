import React from "react";

import {Link} from "react-router-dom";

import {AreaHeader, Texto} from './styled';
function Header(){
    return(
        
        <AreaHeader>
        
        <div className="container">

            

            <nav>

                <ul>

                <li><Link to="/"style={{color: "orange", textDecoration: "none"}}>Inicio</Link></li>
                    <li><Link to="/Parceiros"style={{color: "orange", textDecoration: "none"}}>Parceiros</Link></li>
                    <li><Link to="/Contato"style={{color: "orange", textDecoration: "none"}}>Contato</Link></li>
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
            <input placeholder="Pesquisar" style={{borderRadius: 20, width: "176px", height: 20, marginLeft: 117}}></input>    
            </Texto>    
            </div>.


        </div>
        </AreaHeader>
    );

}

export default Header;