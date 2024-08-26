import React, { useState } from 'react';
import './ConsultarEmpleado.css'; 
//import logo from '../../assets/images/logo.png';

function ConsultarEmpleado() {
  const [userFormVisible, setUserFormVisible] = useState(false);

  const buscarUsuario = () => {
    const input = document.getElementById('searchInput').value;
    if (input !== '') {
      setUserFormVisible(true);
    } else {
      setUserFormVisible(false);
    }
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src="IMG/logo.png" alt="Logo" />
          <span>CONSULTAR EMPLEADO</span>
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
          <input type="text" placeholder="BUSCAR" id="searchInput" />
          <button type="button" className="search-button" onClick={buscarUsuario}>🔍</button>
        </div>
        {userFormVisible && (
          <div className="form-container" id="userForm">
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
                  <button type="button" className="estado-button habilitado">Habilitado</button>
                  <button type="button" className="estado-button inhabilitado">Inhabilitado</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ConsultarEmpleado;
