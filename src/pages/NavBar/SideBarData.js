import React from 'react';

import * as AiIcons from 'react-icons/ai';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {BiConversation} from "react-icons/bi";
import {MdPeopleAlt} from "react-icons/md";
import {RiRecycleFill} from "react-icons/ri";
import {FaPaperclip} from "react-icons/fa"

import {BsFillChatRightDotsFill, BsQuestionLg}  from "react-icons/bs";
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Busca Pev',
    path: '/BuscaPev',
    icon: <GiMagnifyingGlass />,
    cName: 'nav-text'
  },
  {
    title: 'Coleta Seletiva',
    path: '/BuscaColeta',
    icon: <RiRecycleFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Informações sobre materiais',
    path: '/Info',   
    icon: <FaPaperclip/>,
    cName: 'nav-text'
  },
  {
    title: 'Fale conosco',
    path: '/Contato',   
    icon: <BiConversation/>,
    cName: 'nav-text'
  },
  {
    title: 'Parceiros',
    path: '/Parceiros',   
    icon: <MdPeopleAlt/>,
    cName: 'nav-text'
  },
  {
    title: 'Perguntas',
    path: '/Perguntas', 
    icon: <BsQuestionLg/>,  
    cName: 'nav-text'
  },
];