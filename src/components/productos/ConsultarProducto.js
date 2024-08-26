import React, { useState } from 'react';
import './ConsultarProducto.css'; 
//import logo from '../../assets/images/logo.png';

function ConsultarProducto() {
  const [productVisible, setProductVisible] = useState(false);

  const buscarProducto = () => {
    const searchBar = document.getElementById('search-bar').value.trim();
    if (searchBar !== '') {
      setProductVisible(true);
    } else {
      setProductVisible(false);
    }
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="IMG/logo.png" alt="Logo" />
          <span>CONSULTAR PRODUCTO</span>
        </div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Servicios</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="search-container">
          <input type="text" id="search-bar" placeholder="Buscar" />
          <button type="button" id="search-button" onClick={buscarProducto}>
            <img src="search-icon.png" alt="Buscar" />
          </button>
        </div>
        {productVisible && (
          <div className="container">
            <div className="product-container" id="product-container">
              <h2>INFORMACIÓN DEL PRODUCTO</h2>
              <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value="Producto 1" readOnly />

                <label htmlFor="detalles">Detalle de producto:</label>
                <input type="text" id="detalles" value="Descripción del producto 1" readOnly />

                <label htmlFor="fecha">Fecha de caducidad:</label>
                <input type="text" id="fecha" value="01/01/2025" readOnly />

                <label htmlFor="id">ID:</label>
                <input type="text" id="id" value="ID12345" readOnly />
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ConsultarProducto;
