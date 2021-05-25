import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Depositos from './pages/Depositos';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage} /> 
                <Route path="/depositos" exact component={Depositos} /> 
                <Route path="/login" exact component={Login} />                  
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;