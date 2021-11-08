import React, {useState} from "react";

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { ContainerPage, TitlePage } from "../../Components/Main";

import {Texto, Alinhar, Imagem, Imagem2} from './styled'

import Header from './Header/index';

import NavBar from "../NavBar/Navbar"


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: -33.4507, lng: -53.2350 }}
  >
    {props.isMarkerShown && <Marker position={{  }} />}
  </GoogleMap>
))


const Page = () => {


    const [date, setDate] = useState( new Date());
    const onChange = date =>{
        setDate(date)
    };
    return (
       

<>
<NavBar/>
        <ContainerPage>

            <Alinhar>

<nav>
    <ul>
        <li>
        <Texto>Busca Pev</Texto> 
        </li>
        <li style={{marginLeft: 700}}>

        <Imagem>
              <img src="../../../logo.png" />
         </Imagem>
        </li>
    </ul>
</nav>

            </Alinhar>
            <br/>

            <Alinhar>

            <nav>
    <ul>
        <li>
        <input placeholder="Pesquisar" style={{ width: "1100px", height: 30, marginLeft: 130, marginBottom: 50, borderRadius: 20}}></input>  
        </li>
        <li>

        <Imagem2>
              <img src="../../../Img_Local.png" style={{marginTop: -8, marginLeft: -40}} />
         </Imagem2>
        </li>
       
    </ul>
    
</nav>
                
     
            </Alinhar>

   
                                   
        </ContainerPage>
                                            
<MyMapComponent 
                                isMarkerShown
                                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%`, width: `1700px` }} />}
                                containerElement={<div style={{ height: `700px`, width: `800px`, marginLeft: 250 }} />}
                                mapElement={<div style={{ height: `100%`, width: `1200px` }} />}
                                />  
        </>
    );
}

export default Page;
