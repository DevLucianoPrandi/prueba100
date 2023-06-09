import React, { useRef } from 'react';
import "./contacto.css";
import { Container } from "react-bootstrap";
import emailjs from 'emailjs-com';
import Enviado from './enviadocon.jsx'

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dy9buyd', 'template_iqozldp', e.target, 'f4Lf9VKH78FLlY98I')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container fluid className="contenedor">
      <form ref={form} onSubmit={sendEmail} className="formRegistro">
        <h4 className='tituloCont'>Ponete en contacto con Fluently</h4>
        <input
          type="text"
          placeholder="Nombre"
          className="input"
          name="nombre"
          required />
        <input
          type="text"
          placeholder="Apellido"
          className="input"
          name="apellido"
          required />
        <input
          type="email"
          placeholder="E-mail"
          className="input"
          name="email"
          required />
        <textarea
          type="text"
          placeholder="Mensaje"
          className="input"
          name="mensaje"
          cols="40"
          rows="5"
          required />
          <div span style={{width:'40%'}}>
        <Enviado />
        </div>
      </form>

    </Container>
  );
};
export default Contacto;