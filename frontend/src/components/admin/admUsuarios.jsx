import React, { useState, useEffect } from 'react';
import { getAlumnos } from './services';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/esm/Container';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/esm/Button';



export const AdmUsuarios = () => {

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
        <div>
            <Container className='p-3' style={{ width: '50%' }}>
                <Button variant='success' className=' m-2'>Crear perfil</Button>
                <Button className=' m-2'>Actualizar perfil</Button>
                <Button variant='danger' className='m-2'>Eliminar perfil</Button>
            </Container>

            <Container className='p-3' style={{ width: '50%' }}>
                {alumnos.map(({ nombre, apellido, fechadenac, dni, telefono, email, password, usuario }) => (
                    <Accordion rounded defaultActiveKey="0" className='p-3'>
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
                                                src={process.env.PUBLIC_URL + '/assets/img/ingles.png'} />
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
                            <Accordion.Header><h5>Cursos</h5></Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                ))}

            </Container>
        </div>
    );
}

export default AdmUsuarios
