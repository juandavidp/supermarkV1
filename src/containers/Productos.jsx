import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import '../assets/styles/productos.scss'

const editProduct = (event, producto) => {
    event.preventDefault();
    console.log(producto);
}

let productos = [
    {
        cantidad: 4,
        nombre: 'Manzana',
        codigo: 384755,
        precio: 1200,
    },
    {
        cantidad: 3,
        nombre: 'Durazno',
        codigo: 384734,
        precio: 2450,
    },
    {
        cantidad: 4,
        nombre: 'Papa sabanera',
        codigo: 165782,
        precio: 1840,
    },
    {
        cantidad: 1,
        nombre: 'Yuca',
        codigo: 183756,
        precio: 1130,
    },
    {
        cantidad: 4,
        nombre: 'Piña',
        codigo: 38387,
        precio: 3400,
    },
];

function Productos() {
    return (
        <div className="container" id="container">
            <Header />
            <div className="content">
                <div className="productos">
                    <h1 className="main-title">Pro<span>ductos</span></h1>
                    <div className="section-container">
                        <div className="buscar-agregar">
                            <Search />
                            <button className="productos__button">Agregar productos</button>
                        </div>
                        <div className="productos__table">
                            <table>
                                <thead>
						            <tr>
                                        <td>
                                            Cantidad
                                        </td>
                                        <td>
                                            Nombre
                                        </td>
                                        <td>
                                            Código
                                        </td>
                                        <td>
                                            Precio unitario
                                        </td>
                                        <td>
                                            Precio total
                                        </td>
                                        <td>
                                            
                                        </td>
                                    </tr>	
					            </thead>
					            <tbody id="tableBody">
                                    {productos.map((product, index) =>
                                        <tr key={index}>
                                            <td>
                                                {product.cantidad}
                                            </td>
                                            <td>
                                                {product.nombre}
                                            </td>
                                            <td>
                                                {product.codigo}
                                            </td>
                                            <td>
                                                {product.precio}
                                            </td>
                                            <td>
                                                {product.precio * product.cantidad}
                                            </td>
                                            <td>
                                                <button onClick={(event)=> editProduct(event, product.codigo)} className="productos__button">Editar</button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productos