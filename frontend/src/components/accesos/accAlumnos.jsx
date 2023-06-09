import React, { useRef } from 'react';
import "../alumnos/alumnos.css";
import { Container } from "react-bootstrap";
import BtnRegistro from './btnRegistro.jsx';
import BtnPerfil from './btnPerfil.jsx';
import Form from 'react-bootstrap/Form';

const AccAlumnos = () => {

  return (
    <Container fluid className="contenedor">
      <form className="formRegistro">
        <h4>Entrá a tu perfil de usuario</h4>
        <input
          type="text"
          placeholder="Usuario"
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
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Mostrar contraseña"
          />
        </Form>
        <div className='buttons'>
          <div className='p-2'><BtnPerfil /></div>
          <div className='p-2'><BtnRegistro /></div>
        </div>
      </form>

    </Container>
  );
};
export default AccAlumnos;