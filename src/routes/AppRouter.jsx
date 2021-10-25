import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../containers/Home";
import Productos from "../containers/Productos";
import PrivateRouter from "./PrivateRouter";
import { login } from "../actions/auth";
import { firebase } from "../firebase/config";

import PublicRouter from "./PublicRouter";
import AuthRouter from "./AuthRouter";
import { Redirect } from "react-router";
import Login from "./../containers/Login";
import PagesRouter from "./PagesRouter";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        const usuario = {
          id: user.uid,
          email: user.email,
          userName: user.displayName,
        };

        setLog(usuario);
      } else {
        setLog(false);
      }
    });
  }, [setLog]);
  console.log(log);

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={AuthRouter} /> */}
        {/* <Route exact path="/home" component={Home} />
        <Route exact path="/productos" component={Productos} /> */}
        <PublicRouter path="/" component={AuthRouter} log={log} />
        <Productos />
        <PrivateRouter log={log} component={PagesRouter} />

        {/* <PrivateRouter log={log} component={PagesRouter} exact path="/home" /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
