import React from 'react';
import './ConfirmarServicio.css'; 
//import logo from '../../assets/images/logo.png';

function SolicitudServicio() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="IMG/logo.png" alt="Logo" />
          <span>SOLICITUD DE SERVICIO</span>
        </div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Perfil</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="info-container">
            <h2>SOLICITUD DE SERVICIO</h2>
            <form>
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" defaultValue="Juan Pérez" />
              <label htmlFor="address">Dirección:</label>
              <input type="text" id="address" name="address" defaultValue="Calle Falsa 123" />
              <label htmlFor="date">Fecha:</label>
              <input type="date" id="date" name="date" defaultValue="2024-07-28" />
              <label htmlFor="time">Hora:</label>
              <input type="time" id="time" name="time" defaultValue="14:00" />
              <p>¿Desea confirmar?</p>
              <div className="status">
                <button type="button" className="active" disabled>Confirmar</button>
                <button type="button" className="inactive" disabled>No confirmar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SolicitudServicio;
