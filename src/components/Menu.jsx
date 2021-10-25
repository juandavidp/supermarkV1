import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { Link } from "react-router-dom";
import Productos from "./../containers/Productos";

const Menu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="menu" id="menu">
      <ul>
        <li>
          <a href="/home/">Inicio</a>
        </li>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Ventas
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Realizar Venta</Dropdown.Item>
            <Dropdown.Item href="#">Buscar Ventas</Dropdown.Item>
            <Dropdown.Item href="#">Actualizar Venta</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <li>
          <a href="/productos">Productos</a>
        </li>

        <li>{/* <a href="/productos">Usuarios</a> */}</li>
        <li id="logout__button">
          <a onClick={handleLogout} href="/">
            Salir
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
