import React from "react";

import { Switch, Route } from "react-router-dom";

import Welcome from "../pages/Welcome";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Welcome} />
    </Switch>
);

export default Routes;
