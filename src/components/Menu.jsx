import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { Link } from "react-router-dom";

const Menu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="menu" id="menu">
      <ul>
        <li>
          <Link to="/home">Inicio</Link>
        </li>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Ventas
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <li>
              <Link to="/cventa">Realizar Venta</Link>
            </li>
            <li>
              <Link to="/rVentas">Buscar Ventas</Link>
            </li>
            <li>
              <Link to="/uVenta">Actualizar Venta</Link>
            </li>
          </Dropdown.Menu>
        </Dropdown>
        <li>
          <Link to="/productos">Productos</Link>
        </li>

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
