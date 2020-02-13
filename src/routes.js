import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Games from './pages/Games';
import Team from './pages/Team/index';
import All from './pages/All/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/games" exact component={ Games }></Route>
                <Route path="/teams" component={ All }></Route>
                <Route path="/team/:teamId?" component={ Team }></Route>
                {/* <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/new" component={New}></Route> */}
            </Switch>
        </BrowserRouter>
    );
}