import React from 'react';
import './ReporteVentas.css'; 
//import logo from '../../assets/images/logo.png';

function ReporteVentas() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="IMG/logo.png" alt="Logo" />
          <span>REPORTE DE VENTAS</span>
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
        <div className="ventas-container">
          <div className="ventas-table">
            <div className="table-row header">
              <div className="cell">Fecha</div>
              <div className="cell">Producto</div>
              <div className="cell">Cantidad</div>
              <div className="cell">Comprador</div>
            </div>
            <div className="table-row">
              <div className="cell">XXXXXXXXX</div>
              <div className="cell">XXXXXXXXX</div>
              <div className="cell">0000</div>
              <div className="cell">XXXXXXXXX</div>
            </div>
            <div className="table-row">
              <div className="cell">XXXXXXXXX</div>
              <div className="cell">XXXXXXXXX</div>
              <div className="cell">0000</div>
              <div className="cell">XXXXXXXXX</div>
            </div>
            <div className="table-row">
              <div className="cell">XXXXXXXXX</div>
              <div className="cell">XXXXXXXXX</div>
              <div className="cell">00000</div>
              <div className="cell">XXXXXXXXX</div>
            </div>
          </div>
        </div>
        <button className="generate-report">Generar Reporte</button>
      </main>
    </div>
  );
}

export default ReporteVentas;
