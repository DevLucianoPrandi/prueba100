import React, { useRef } from 'react';
import { Button, Container } from "react-bootstrap";
import BtnRegistro from "./btnRegistro";
import BtnReset from "./btnReset";
import Form from 'react-bootstrap/Form';

function Registro() {
  return (
    <Container fluid className="contenedor">
      <form className="formRegistro">
        <h4>Registrate en Fluently</h4>
        <input
          type="text"
          placeholder="Nombre(s)"
          className="input"
          name="nombre"
          required />
        <input
          type="text"
          placeholder="Apellido(s)"
          className="input"
          name="apellido"
          required />
        <input
          type="text"
          placeholder="Fecha de nacimiento"
          className="input"
          name="fechadenac"
          required />
        <input
          type="text"
          placeholder="Número de DNI"
          className="input"
          name="dni"
          required />
        <input
          type="text"
          placeholder="Número de teléfono"
          className="input"
          name="telefono"
          required />
        <input
          type="text"
          placeholder="E-Mail"
          className="input"
          name="email"
          required />
        <input
          type="text"
          placeholder="Nombre de usuario"
          className="input"
          name="usuario"
          required />
        <input
          type="password"
          placeholder="Contraseña"
          className="input"
          name="contraseña"
          pattern="[A-Za-z0-9]{8,20}"
          required />
        <input
          type="password"
          placeholder="Repetí tu contraseña"
          className="input"
          name="recontraseña"
          pattern="[A-Za-z0-9]{8,20}"
          required />
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Mostrar contraseña"
          />
        </Form>
        <div className='buttons'>
          <div className='p-2'><BtnRegistro /></div>
          <div className='p-2'><BtnReset /></div>
        </div>
      </form>

    </Container>
  )
}

export default Registro