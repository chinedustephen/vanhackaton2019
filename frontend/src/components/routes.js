import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./../containers/home/view";
import Login from "./../containers/login/view";
import ViewClass from "./../containers/viewClass/view";
import CreateClass from "./../containers/createClass/view";



function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact={true}
                    path="/"
                    component={Home}
                />

                <Route exact path="/login" component={Login} />
                <Route exact path="/view-class" component={ViewClass} />
                <Route exact path="/create-class" component={CreateClass} />
                <Route exact path="*" component={() => "404 NOT FOUND"} />

            </Switch>
        </BrowserRouter>
    );
}

export default routes;
