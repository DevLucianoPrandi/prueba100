import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Servicios from "./components/servicios/servicios";
import Idiomas from "./components/idiomas/idiomas";
import Niveles from "./components/niveles/niveles";
import Calendario from "./components/calendario/calendario";
import Contacto from "./components/contacto/contacto";
import Alumnos from "./components/alumnos/alumnos";
import Admin from "./components/admin/admin";
import Reserva from "./components/reserva/reserva";
import Registro from "./components/accesos/registro";
import AccAlumnos from "./components/accesos/accAlumnos";
import AccAdmin from "./components/accesos/accAdmin";
import AdmUsuarios from "./components/admin/admUsuarios";
import AdmIdiomas from "./components/admin/admIdiomas";
import Remate from "./components/footer/remate";
import Error from "./components/error/error";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="idiomas" element={<Idiomas />} />
          <Route path="niveles" element={<Niveles />} />
          <Route path="calendario" element={<Calendario />} />
          <Route path="alumnos" element={<Alumnos />} />
          <Route path="registro" element={<Registro />} />
          <Route path="admin" element={<Admin />} />
          <Route path="accAlumnos" element={<AccAlumnos />} />
          <Route path="accAdmin" element={<AccAdmin />} />
          <Route path="admUsuarios" element={<AdmUsuarios/>} />
          <Route path="admIdiomas" element={<AdmIdiomas/>} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="reserva" element={<Reserva />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <Remate />
      </BrowserRouter>
    </div>
  );
}
export default App;
