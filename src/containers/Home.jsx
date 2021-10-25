import React from "react";
import Header from "../components/Header";
import "../assets/styles/home.scss";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Productos from "./Productos";

const Home = () => {
  const { auth } = useSelector((state) => state);

  return (
    <div className="container" id="container">
      <Header />
      <div className="content">
        <div className="welcome">
          <h1 className="main-title">
            Super<span>Mark</span>
          </h1>
          <h3>
            <span className="text-success bg-light">
              Bienvenido {auth.displayName}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
