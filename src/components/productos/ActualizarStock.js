import React, { useState } from 'react';
import './ActualizarStock.css'; 
//import logo from '../../assets/images/logo.png';

function ActualizarStock() {
  const [alertVisible, setAlertVisible] = useState(false);

  const mostrarAlerta = () => {
    setAlertVisible(true);
  };

  const cerrarAlerta = () => {
    setAlertVisible(false);
  };

  const guardarCambios = () => {
    alert("Cambios guardados con éxito.");
    cerrarAlerta();
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="IMG/logo.png" alt="Logo" />
          <span>ACTUALIZAR STOCK</span>
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
          <div className="stock-container">
            <h2>STOCK</h2>
            <table>
              <thead>
                <tr>
                  <th>PRODUCTO</th>
                  <th>STOCK ACTUAL</th>
                  <th>STOCK MÍNIMO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Producto 1</td>
                  <td><input type="number" defaultValue="20" /></td>
                  <td><input type="number" defaultValue="5" /></td>
                </tr>
                <tr>
                  <td>Producto 2</td>
                  <td><input type="number" defaultValue="50" /></td>
                  <td><input type="number" defaultValue="10" /></td>
                </tr>
                <tr>
                  <td>Producto 3</td>
                  <td><input type="number" defaultValue="30" /></td>
                  <td><input type="number" defaultValue="8" /></td>
                </tr>
              </tbody>
            </table>
            <div className="confirmation-container">
              <button type="button" onClick={mostrarAlerta}>Guardar Cambios</button>
            </div>
          </div>
        </div>
      </main>

      {alertVisible && (
        <div id="alerta" className="alerta-overlay">
          <div className="alerta-box">
            <p>¿Desea guardar cambios?</p>
            <div className="confirmation-buttons">
              <button type="button" onClick={guardarCambios}>SI</button>
              <button type="button" onClick={cerrarAlerta}>NO</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActualizarStock;
