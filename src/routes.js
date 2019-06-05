import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./Main";
import Details from "./components/Detalhes";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/pokemon/:id" component={Details}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;