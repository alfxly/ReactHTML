import React, { useState } from 'react';
import './InhabilitarEmpleado.css'; 
//import logo from '../../assets/images/logo.png';

function InhabilitarEmpleado() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [estado, setEstado] = useState('');

  const mostrarAlerta = (estado) => {
    setEstado(estado);
    setAlertVisible(true);
  };

  const cerrarAlerta = () => {
    setAlertVisible(false);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="IMG/logo.png" alt="Logo" />
          <span>CAMBIAR ESTADO EMPLEADO</span>
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
        <div className="form-container">
          <div className="form-box">
            <form>
              <label htmlFor="nombre-actual">Nombre:</label>
              <input type="text" id="nombre-actual" name="nombre-actual" value="XXXXXXXXXXX" disabled />

              <label htmlFor="rol-actual">Rol:</label>
              <input type="text" id="rol-actual" name="rol-actual" value="XXXX@gmail.com" disabled />

              <label htmlFor="username-actual">Nombre de usuario:</label>
              <input type="text" id="username-actual" name="username-actual" value="***********" disabled />

              <label htmlFor="password-actual">Clave:</label>
              <input type="password" id="password-actual" name="password-actual" value="***********" disabled />

              <label htmlFor="estado">Estado:</label>
              <div className="estado-buttons">
                <button type="button" className="estado-button habilitado" onClick={() => mostrarAlerta('habilitado')}>Habilitado</button>
                <button type="button" className="estado-button inhabilitado" onClick={() => mostrarAlerta('inhabilitado')}>Inhabilitado</button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {alertVisible && (
        <div id="alerta" className="alerta-overlay">
          <div className="alerta-box">
            <p id="alerta-mensaje">¿Desea cambiar el estado del usuario a {estado}?</p>
            <div className="confirmation-buttons">
              <button type="button" onClick={cerrarAlerta}>SI</button>
              <button type="button" onClick={cerrarAlerta}>NO</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InhabilitarEmpleado;
