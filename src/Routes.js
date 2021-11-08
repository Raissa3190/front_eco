import {Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import Sobre from './pages/Contato'
import Config from './pages/Parceiros'
import Login_us from './pages/Login_usu'
import Login_emp from './pages/Login_emp'
import Recuperarsenha from './pages/Esquece_Senha'
import Inicial from './pages/Inicial'
import Perfil_Usu from './pages/Perfil_Usu'
import Cad_Usu from './pages/Cad_Usu'
import Busca from './pages/BuscaPev'
import BuscaColeta from './pages/BuscaColeta'
import Perguntas from './pages/Perguntas'
import Fale from './pages/FaleConosco'
import Info from './pages/InfoRecicla'
import Recuperarsenha2 from './pages/Esquece_Senha2'
import Cad_emp from './pages/Cad_emp'


export default () =>{


    return(


        <Switch >
                <Route exact path="/">
                      <Home/>
                </Route>

                <Route exact path="/Parceiros">
                      <Config/>
                </Route>

                <Route exact path="/Contato">
                       <Sobre/>
                </Route>

                <Route exact path="/Login_us">
                       <Login_us/>
                </Route>

                <Route exact path="/Login_emp">
                       <Login_emp/>
                </Route>

                <Route exact path="/Reset_Senha_Passo_1">
                     <Recuperarsenha/>
                </Route>

                <Route exact path="/Inicial">
                     <Inicial/>
                </Route>
              
              <Route exact path="/Perfil_Usu">
                     <Perfil_Usu/>
              </Route>

              <Route exact path="/Cad_usu">
                     <Cad_Usu/>
              </Route>

              <Route exact path="/BuscaPev">
                     <Busca/>
              </Route>

              <Route exact path="/BuscaColeta">
                     <BuscaColeta/>
              </Route>

              <Route exact path="/Perguntas">
                     <Perguntas/>
              </Route>

              <Route exact path="/FaleConosco">
                    <Fale/>
              </Route>

              <Route exact path="/Info">
                     <Info/>
              </Route>

              <Route exact path="/Reset_Senha_Passo_2">
              <Recuperarsenha2/>
              </Route>

              <Route exact path="/Cad_emp">
                     <Cad_emp/>
              </Route>
              

        </Switch>
    );

}