import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import RegistrarEmpleado from './components/empleados/RegistrarEmpleado';
import ActualizarEmpleado from './components/empleados/ActualizarEmpleado';
import InhabilitarEmpleado from './components/empleados/InhabilitarEmpleado'; 
import ConsultarEmpleado from './components/empleados/ConsultarEmpleado';
import RegistrarProducto from './components/productos/RegistrarProducto';
import ActualizarStock from './components/productos/ActualizarStock';
import InactivarProducto from './components/productos/InactivarProducto';
import ReporteVentas from './components/productos/ReporteVentas';
import ConsultarProducto from './components/productos/ConsultarProducto';
import ConfirmarServicio from './components/servicios/ConfirmarServicio';
import ConsultarServicio from './components/servicios/ConsultarServicio';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registrar-empleado" element={<RegistrarEmpleado />} />
          <Route path="/actualizar-empleado" element={<ActualizarEmpleado />} />
          <Route path="/inhabilitar-empleado" element={<InhabilitarEmpleado />} />
          <Route path="/consultar-empleado" element={<ConsultarEmpleado />} />
          <Route path="/registrar-producto" element={<RegistrarProducto />} />
          <Route path="/actualizar-stock" element={<ActualizarStock />} />
          <Route path="/inactivar-producto" element={<InactivarProducto />} />
          <Route path="/reporte-ventas" element={<ReporteVentas />} />
          <Route path="/consultar-producto" element={<ConsultarProducto />} />
          <Route path="/confirmar-servicio" element={<ConfirmarServicio />} />
          <Route path="/consultar-servicio" element={<ConsultarServicio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
