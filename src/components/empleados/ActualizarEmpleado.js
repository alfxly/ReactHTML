import React, { useState } from 'react';
import './ActualizarEmpleado.css'; 
//import logo from '../../assets/images/logo.png';
function ActualizarEmpleado() {
  const [updateVisible, setUpdateVisible] = useState(false);

  const showUpdateForm = () => {
    setUpdateVisible(true);
  };

  const hideUpdateForm = () => {
    setUpdateVisible(false);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="IMG/logo.png" alt="Logo" />
          <span>ACTUALIZAR EMPLEADO</span>
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

      <div className="container">
        <div className="data-box">
          <h2>Datos actuales</h2>
          <form id="actualizar-form">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" value="XXXXXXXXXXX" disabled title="Nombre" placeholder="Nombre" />

            <label htmlFor="rol">Rol:</label>
            <input type="email" id="rol" value="XXXX@gmail.com" disabled title="Correo electrónico" placeholder="Correo electrónico" />

            <label htmlFor="usuario">Nombre de usuario:</label>
            <input type="text" id="usuario" value="*********" disabled title="Nombre de usuario" placeholder="Nombre de usuario" />

            <label htmlFor="clave">Clave:</label>
            <input type="password" id="clave" value="*******" disabled title="Clave" placeholder="Clave" />

            <button type="button" className="primary-btn" onClick={showUpdateForm}>Actualizar Datos</button>
          </form>
        </div>

        {updateVisible && (
          <div className="data-box" id="update-data">
            <h2>Datos por actualizar</h2>
            <form>
              <label htmlFor="new-rol">Rol:</label>
              <input type="text" id="new-rol" placeholder="Nuevo rol" title="Nuevo rol" />

              <label htmlFor="new-email">Correo electrónico:</label>
              <input type="email" id="new-email" placeholder="Nuevo correo electrónico" title="Nuevo correo electrónico" />

              <div className="button-group">
                <button type="submit" className="primary-btn">Guardar cambios</button>
                <button type="button" className="secondary-btn" onClick={hideUpdateForm}>Cancelar</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActualizarEmpleado;
