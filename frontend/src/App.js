import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Servicios from "./components/servicios/servicios";
import Idiomas from "./components/idiomas/idiomas";
import Cursos from "./components/cursos/cursos";
import Calendario from "./components/calendario/calendario";
import Contacto from "./components/contacto/contacto";
import Admin from "./components/admin/admin";
import Reserva from "./components/reserva/reserva";
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
          <Route path="calendario" element={<Calendario />} />
          <Route path="admin" element={<Admin />} />
          <Route path="cursos" element={<Cursos />} />
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
