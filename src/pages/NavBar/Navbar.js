import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import {Texto} from '../Inicial/Header/styled'

import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
        <div className='navbar'>
          <Link to='#' className='menu-bars' style={{textDecoration: "none"}}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <text style={{marginLeft: 810, color: 'white'}}>Eco Reuse</text>
          <Texto>
            
            <input placeholder="Pesquisar" style={{borderRadius: 20, width: 180, height: 20, marginLeft: 20}}></input>    
            </Texto>  

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' style={{textDecoration: "none"}}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} style={{textDecoration: "none"}}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          
        </nav>
        
    </>
  );
}

export default Navbar;