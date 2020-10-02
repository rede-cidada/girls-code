import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Guia from './Pages/Guia';
import Colaboradores from './Pages/Colaboradores';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/"><Home/></Route>
            < Route exact path="/guia"><Guia /></Route>
            < Route exact path="/colaboradores" ><Colaboradores/></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;