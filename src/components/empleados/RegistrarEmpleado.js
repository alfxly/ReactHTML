import React, { useState } from 'react';
import './RegistrarEmpleado.css'; 
//import logo from '../../assets/images/logo.png';

function RegistrarEmpleado() {
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
          <img src="C:\mi-proyecto\src\IMG" alt="Logo" />
          <span>REGISTRAR EMPLEADO</span>
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
            <h2>REGISTRAR EMPLEADO</h2>
            <form onSubmit={mostrarAlerta}>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
              
              <label htmlFor="rol">Rol:</label>
              <input type="text" id="rol" name="rol" required />
              
              <label htmlFor="username">Nombre de usuario:</label>
              <input type="text" id="username" name="username" required />
              
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" required />
              
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" required />
              
              <button type="submit">Registrar</button>
            </form>
          </div>
        </div>

        {modalVisible && (
          <div id="modalConfirmacion" className="modal">
            <div className="modal-content">
              <span className="close" onClick={cerrarModal}>×</span>
              <h2>¡Empleado Registrado!</h2>
              <p>El empleado ha sido registrado exitosamente.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default RegistrarEmpleado;

