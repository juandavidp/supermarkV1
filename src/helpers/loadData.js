import { db } from "../firebase/config";

export async function BuscarVentas() {
  const respuesta = await db.collection("ventas").get();
  const data = [];
  respuesta.forEach(function (item) {
    const ventaData = item.data();
    data.push({ ventaData });
  });
  console.log(data);
  return data;
}
/* 
export const loadData = async () => {
  const respuesta = await db.collection("venta").get();
  const data = [];
  respuesta.forEach((item) => {
    const ventaData = item.data();
    data.push({ id: item.id, ...item });
  });
  console.log(data);
  return data;
};
 */
