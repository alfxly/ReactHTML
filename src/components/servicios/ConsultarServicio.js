import React, { useState } from 'react';
import './ConsultarServicio.css'; 
//import logo from '../../assets/images/logo.png';

function ConsultarServicio() {
  const [serviceVisible, setServiceVisible] = useState(false);

  const buscarServicio = () => {
    const searchBar = document.getElementById('search-bar').value.trim();
    if (searchBar !== '') {
      setServiceVisible(true);
    } else {
      setServiceVisible(false);
    }
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="IMG/logo.png" alt="Logo" />
          <span>CONSULTAR SERVICIO</span>
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
          <input type="text" id="search-bar" placeholder="BUSCAR SERVICIO" />
          <button type="button" id="search-button" onClick={buscarServicio}>
            <img src="search-icon.png" alt="Buscar" />
          </button>
        </div>
        {serviceVisible && (
          <div className="container">
            <div className="service-container" id="service-container">
              <h2>INFORMACIÓN DEL SERVICIO</h2>
              <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value="Servicio 1" readOnly />

                <label htmlFor="descripcion">Descripción:</label>
                <input type="text" id="descripcion" value="Descripción del servicio 1" readOnly />
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ConsultarServicio;
