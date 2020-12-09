import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Detail, Home } from "./pages";

const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default Routes;
