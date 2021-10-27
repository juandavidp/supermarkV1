import React from "react";

const Elemento = ({ data }) => {
  console.log("log elento", ...data.ventaData);
  console.log("log elento documento", ...data.ventaData);
  return <div></div>;
};

export default Elemento;
