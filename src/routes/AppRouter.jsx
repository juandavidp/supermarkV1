import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, BrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import Productos from "../containers/Productos";
import PrivateRouter from "./PrivateRouter";
import ListaVentas from "../containers/ListarVenta";
import { login } from "../actions/auth";
import { firebase } from "../firebase/config";

import PublicRouter from "./PublicRouter";
import AuthRouter from "./AuthRouter";
import { Redirect } from "react-router";
import { BuscarVentas, loadData } from "./../helpers/loadData";
import { leerVentas } from "./../actions/ventas";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(async () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        const usuario = {
          id: user.uid,
          email: user.email,
          userName: user.displayName,
        };

        const ventaData = await BuscarVentas();
        console.log("promise app", ventaData);
        dispatch(leerVentas(ventaData));

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
        <PrivateRouter exact path="/home" log={log} component={Home} />
        <PrivateRouter
          exact
          path="/productos"
          log={log}
          component={Productos}
        />
        <PrivateRouter
          exact
          path="/rVentas"
          log={log}
          component={ListaVentas}
        />
        <PublicRouter exact path="/" component={AuthRouter} log={log} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
