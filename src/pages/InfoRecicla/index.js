import React from "react";

import { ContainerPage } from "../../Components/Main";


import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';

import {Texto,Alinhar,Imagem} from './styled';
import Header from './Header/index';
import NavBar from "../NavBar/Navbar"

const options = [
    'Selecione uma opção','PDF1', 'PDF2', 'PDF3'
  ];

  const defaultOption = options[0];
  
const Page = () => {

    return (


<>
<NavBar/>
        <ContainerPage>

            <Alinhar>

<nav>
    <ul>
        <li>

        <Texto>Informações Sobre Materiais Recicláveis</Texto>
        </li>

        <li>
            
        <Imagem>
              <img src="../../../logo.png" />
         </Imagem>
        </li>
    </ul>
</nav>

            </Alinhar>
            
            <div style={{width: 700, marginLeft: 300, marginTop: 20}}>
            <Dropdown options={options} value={defaultOption}  />
            </div>

         
        </ContainerPage>

        </>
    );
}

export default Page;
