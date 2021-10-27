import { db } from "../firebase/config";
import { types } from "./../types/types";

/* export const crearVenta = (data) => {
  return dispatch, state;
}; */

export const leerVentas = (data) => {
  return { type: types.ventaRead, payload: data };
};
