import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Nav, Alert } from '@/_components';
import { Home } from '@/home';
import { Users } from '@/users';
import {UseStateHook} from '@/usestatehook'
import {UseRefHook} from '@/userefhook'
import {UseEffectHook} from '@/useeffecthook'
import {UseReducerHook} from '@/usereducerhook'
import {UseCallbackHook} from '@/usecallbackhook'
import {UseMemorizeHook} from '@/usememhook'
import {UseContextHook} from '@/usecontexthook'
import {UseCustomHook} from  '@/usecustomhook'
function App() {
    const { pathname } = useLocation();  

    return (
        <div className="app-container bg-light">
            <Nav />
            <Alert />
            <div className="container pt-4 pb-4">
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <Route exact path="/" component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/usestatehook" component={UseStateHook} />
                    <Route path="/userefhook" component={UseRefHook} />
                    <Route path="/useeffecthook" component={UseEffectHook} />
                    <Route path="/usereducerhook" component={UseReducerHook} />
                    <Route path="/usecallbackhook" component={UseCallbackHook} />
                    <Route path="/usememhook" component={UseMemorizeHook} />
                    <Route path="/usecontexthook" component={UseContextHook} />
                    <Route path="/usecustomhook" component={UseCustomHook} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    );
}

export { App }; 