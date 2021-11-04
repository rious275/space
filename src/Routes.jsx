import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Space from "./Space";

const Routes = () => {
    return (
        <Router>
          <Switch>
            <Redirect exact path="/" to="/space" />
            <Route exact path="/space" component={Space} />
          </Switch>
        </Router>
    )
}

export default Routes;