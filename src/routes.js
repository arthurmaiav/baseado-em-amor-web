import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Home from './pages/Home';
import NewCase from './pages/NewCase';
import Cases from './pages/Casos';
import Somos from './pages/Somos';
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/somos" component={Somos}/>  
                <Route path="/logon" exact component={Logon} />
                <Route path="/home" component={Home} />
                <Route path="/cases/new" component={NewCase} />
                <Route path="/" component={Cases} />              
            </Switch>
        </BrowserRouter>
    );
}