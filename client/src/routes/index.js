import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import routes from './routes';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                { routes.map((route, i) => {
                    if (route.auth) {
                        return <PrivateRoute key={i} {...route} />;
                    } else {
                        // if (true && route.path !== '') {
                        //     return <Redirect to="/" key={i} />;
                        // } else {
                            return <PublicRoute key={i} {...route} />;
                        // }
                    }
                })}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
