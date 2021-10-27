import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({ log, component: Component, ...rest }) => {
  console.log("este es el log del private", log);
  if (log) return <Route {...rest} component={Component} />;
  return <Redirect to="/" />;
};

export default PrivateRouter;
