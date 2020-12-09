import Reactf from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Detail, Home } from "./pages";
// import Home from "./pages";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail/:id" component={Detail} />
            </Switch>
        </Router>
    );
};

export default Routes;
