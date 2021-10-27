import React from "react";
import Header from "../components/Header";
import "../assets/styles/ventas.scss";
import { useSelector } from "react-redux";
import Elemento from "../components/Elemento";
import "../assets/styles/productos.scss";

const ListarVenta = () => {
  let array = [];
  const { venta } = useSelector((state) => state);
  console.log("este es el state", venta);
  return (
    <div className="container" id="container">
      <Header />
      <div className="content">
        <div className="productos">
          <h1 className="main-title">
            Buscar<span> Ventas</span>
          </h1>
          <div className="section-container">
            <div className="productos__table">
              <table>
                <thead>
                  <tr>
                    <th scope="col"> Código Factura </th>
                    <th scope="col"> Documento </th>
                    <th scope="col"> Nombre Cliente </th>
                    <th scope="col"> Precio Total </th>
                    <th scope="col"> Vendedor </th>
                    <th scope="col"> Estado </th>
                    <th scope="col"> Fecha Compra </th>
                  </tr>
                </thead>
                {venta.ventaData.map((elemento) => {
                  const venta = {
                    nFactura: elemento.ventaData.nFactura,
                    documento: elemento.ventaData.documento,
                    nombre: elemento.ventaData.nombre,
                    valor: elemento.ventaData.valorTotal,
                    vendedor: elemento.ventaData.vendedor,
                    estado: elemento.ventaData.estado,
                    fecha: elemento.ventaData.fecha,
                  };
                  array.push(venta);
                  console.log(array);
                })}
                <tbody id="tableBody">
                  {array.map((venta, index) => (
                    <tr key={index}>
                      <td>{venta.nFactura}</td>
                      <td>{venta.documento}</td>
                      <td>{venta.nombre}</td>
                      <td>{venta.valor}</td>
                      <td>{venta.vendedor}</td>
                      <td>{venta.estado}</td>
                      <td>{venta.fecha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListarVenta;
