import React from "react";
import Home from "../containers/Home";
import Productos from "../containers/Productos";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";

const PagesRouter = () => {
  return (
    <Switch>
      <Route path="/home/" component={Home} />

      <Route exact path="/productos/" component={Productos} />

      <Redirect to="/home" />
    </Switch>
  );
};

export default PagesRouter;
