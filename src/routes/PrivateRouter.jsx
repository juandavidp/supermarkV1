import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({ log, component: Component, ...rest }) => {
  console.log("este es el log del private", log);
  return (
    <Route {...rest}>{log ? <Component /> : <Redirect to="/home" />}</Route>
  );
};

export default PrivateRouter;
