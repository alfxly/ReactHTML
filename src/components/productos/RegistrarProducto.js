import React, { useState } from 'react';
import './RegistrarProducto.css'; 
//import logo from '../../assets/images/logo.png';

function RegistrarProducto() {
  const [modalVisible, setModalVisible] = useState(false);

  const mostrarAlerta = (event) => {
    event.preventDefault();
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    document.getElementById('formRegistro').reset();
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="IMG/logo.png" alt="Logo" />
          <span>REGISTRAR PRODUCTO</span>
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
        <div className="form-container">
          <div className="form-box" id="formRegistro">
            <h2>REGISTRAR PRODUCTO</h2>
            <form onSubmit={mostrarAlerta}>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
              
              <label htmlFor="detalles">Detalles de producto:</label>
              <input type="text" id="detalles" name="detalles" required />
              
              <label htmlFor="fecha">Fecha de caducidad:</label>
              <input type="date" id="fecha" name="fecha" required />
              
              <label htmlFor="cantidad">Cantidad:</label>
              <input type="number" id="cantidad" name="cantidad" required />
              
              <label htmlFor="id">ID:</label>
              <input type="text" id="id" name="id" required />
              
              <button type="submit">Registrar</button>
            </form>
          </div>
        </div>

        {modalVisible && (
          <div id="modalConfirmacion" className="modal">
            <div className="modal-content">
              <span className="close" onClick={cerrarModal}>×</span>
              <h2>¡Producto Registrado!</h2>
              <p>El producto ha sido registrado exitosamente.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default RegistrarProducto;
