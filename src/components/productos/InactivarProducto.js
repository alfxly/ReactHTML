import React, { useState } from 'react';
import './InactivarProducto.css'; 
//import logo from '../../assets/images/logo.png';

function EstadoProducto() {
  const [confirmacionVisible, setConfirmacionVisible] = useState(false);

  const cambiarEstado = () => {
    setConfirmacionVisible(true);
  };

  const confirmarCambio = () => {
    alert("Estado cambiado con éxito.");
    cancelarCambio();
  };

  const cancelarCambio = () => {
    setConfirmacionVisible(false);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="IMG/logo.png" alt="Logo" />
          <span>ESTADO PRODUCTO</span>
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
            <h2>PRODUCTO</h2>
            <form>
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" defaultValue="Producto C" />
              <label htmlFor="details">Detalles de producto:</label>
              <input type="text" id="details" name="details" defaultValue="Descripción del producto C" />
              <label htmlFor="expiry">Fecha de caducidad:</label>
              <input type="date" id="expiry" name="expiry" defaultValue="2023-10-20" />
              <label htmlFor="quantity">Cantidad:</label>
              <input type="number" id="quantity" name="quantity" defaultValue="50" />
              <label htmlFor="reference">Referencia:</label>
              <input type="text" id="reference" name="reference" defaultValue="REF789" />
              <div className="status">
                <p>Estado:</p>
                <button type="button" className="active" onClick={() => cambiarEstado('Disponible')}>Disponible</button>
                <button type="button" className="inactive" onClick={() => cambiarEstado('No disponible')}>No disponible</button>
              </div>
            </form>
          </div>
          {confirmacionVisible && (
            <div id="confirmacion" className="confirmation-container">
              <p>¿Desea cambiar el estado del producto?</p>
              <button type="button" className="active" onClick={confirmarCambio}>SI</button> <br />
              <button type="button" className="inactive" onClick={cancelarCambio}>NO</button>
            </div>
          )}
        </div>
        {confirmacionVisible && <div id="overlay" className="overlay"></div>}
      </main>
    </div>
  );
}

export default EstadoProducto;
