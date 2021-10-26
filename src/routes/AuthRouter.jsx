import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../containers/Login";
import { firebase } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

const AuthRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <AppRouter />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRouter;
