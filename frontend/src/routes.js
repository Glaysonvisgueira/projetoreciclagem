import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Depositos from './pages/Depositos';
import DepositoDetalhes from './pages/DepositoDetalhes';
import MapaDepositos from './pages/MapaDepositos';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage} /> 
                <Route path="/depositos" exact component={Depositos} /> 
                <Route path="/depositos/:sigla_dep" exact component={DepositoDetalhes} /> 
                <Route path="/mapa-depositos" exact component={MapaDepositos} />    
                <Route path="/login" exact component={Login} />                  
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;