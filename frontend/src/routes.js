import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./components/Main";
import Details from "./components/Details";
import Add from './components/Pokemon/Add';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/pokemon/add" component={Add}/>
            <Route path="/pokemon/:id" component={Details}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
