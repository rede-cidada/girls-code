import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Guia from './Pages/Guia';
import Colaboradores from './Pages/Colaboradores';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            < Route exact path="/guia" component={Guia} />
            < Route exact path="/colaboradores" component={Colaboradores} />
        </Switch>
    </BrowserRouter>
);

export default Routes;