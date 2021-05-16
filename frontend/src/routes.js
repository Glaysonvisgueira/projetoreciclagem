import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Login from './pages/Login';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Homepage} /> 
                <Route path="/login" exact component={Login} />                  
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;