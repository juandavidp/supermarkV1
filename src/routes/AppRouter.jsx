import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Productos from "../containers/Productos";
import { firebase } from "../firebase/config";
import { login } from "../actions/auth";

const AppRouter = () => {
  /* const dispatch = useDispatch();

  const [log, setLog] = useState(false); */

  /* useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);
        console.log("este es el usuario logueado", user.displayName);
      } else {
        setLog(false);
      }
    });
  }, [dispatch]); */

  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/productos" component={Productos} />

      {/* <Route path="/login" component={AuthRouter} />
        <PublicRouter path="/ " component={AuthRouter} log={log} />
        <PrivateRouter exact path="/home" log={log} component={Home} />
        <PrivateRouter
          exact
          path="/productos"
          log={log}
          component={Productos}
        /> */}
    </Switch>
  );
};

export default AppRouter;
