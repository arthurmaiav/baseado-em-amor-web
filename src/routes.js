import React from 'react';
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Route, Switch,  } from 'react-router-dom';

import Login from './pages/Login';
import Admin from './pages/Admin';
import NewCase from './pages/NewCase';
import Home from './pages/Home';
import About from './pages/About';

export default function Routes() {
    return (
        <BrowserRouter>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route path="/quem-somos" component={About} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/novo-caso" component={NewCase} />
                    <Route path="/" component={Home} />
                </Switch>
            </AnimatePresence>
        </BrowserRouter>
    );
}