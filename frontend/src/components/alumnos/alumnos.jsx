import React, { useState, useEffect } from 'react';
import { getAlumnos } from './services';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/esm/Container';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/esm/Button';

export const Alumnos = () => {

  const [alumnos, setAlumnos] = useState([])

  useEffect(() => {
    async function cargaAlumnos() {
      const response = await getAlumnos()

      if (response.status === 200) {
        setAlumnos(response.data.alumnos)
      }
    }
    cargaAlumnos()
  }, [])

  if (!alumnos.length) {
    return <div className='text-center'>Cargando contenido...</div>
  }

  return (
    <Container className='p-3' style={{ width: '50%' }}>
      {
        alumnos.map(({ nombre, apellido, fechadenac, dni, telefono, email, password, usuario, imagen }) => (
          <Accordion rounded defaultActiveKey="0" className='p-3' >
            <Accordion.Item eventKey="0">
              <Accordion.Header rounded><h5>Tu perfil</h5></Accordion.Header>
              <Accordion.Body>
                <h6><ul className='listaDatos'>
                  <div className='ficha'>
                    <li className='tituloPerfil'><h4>{usuario}</h4></li>
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="Imagen de perfil"
                        src="//src/img/ingles.png"
                      />
                    </Figure>
                    <div className='datos'>
                      <li>Nombre: {nombre}</li>
                      <li>Apellido: {apellido}</li>
                      <li>Fecha de nacimiento: {fechadenac}</li>
                      <li>Número de DNI: {dni}</li>
                      <li>Teléfono de contacto: {telefono}</li>
                      <li>E-mail: {email}</li>
                    </div>
                  </div>
                </ul></h6>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><h5>Tus cursos</h5></Accordion.Header>
              <Accordion.Body>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))
      }
      <Button className='primary'>Actualizar perfil</Button>
      <Button className='warning'>Eliminar perfil</Button>


    </Container>
  );
}

export default Alumnos
