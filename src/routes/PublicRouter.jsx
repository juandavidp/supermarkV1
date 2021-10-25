import React from "react";
import { Route } from "react-router";

import { Redirect } from "react-router-dom";
import Home from "../containers/Home";
import PagesRouter from "./PagesRouter";

const PublicRouter = ({ log, component: Component, ...rest }) => {
  return <Route {...rest}>{log ? <PagesRouter /> : <Component />}</Route>;
};

export default PublicRouter;
