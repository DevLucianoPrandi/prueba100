import React, { useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import emailjs from 'emailjs-com';
import Enviado from './enviadores.jsx'
import './reserva.css'


const Reserva = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dy9buyd', 'template_og5q5ra', e.target, 'xo7OPYyEaHwRz_u9Y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Container fluid className='contenedor'>
            <Form ref={form} onSubmit={sendEmail} className='formulario shadow rounded p-4 bg-white'>
                <Row >
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name="nombre" type="text" placeholder="Ingresá tu nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Ingresá tu dirección de mail" />
                    </Form.Group>
                </Row>
                <Row >
                    <Col sx={12} md={12} lg={4}>
                        <Form.Group >
                            <Form.Label>Idioma que querés aprender: </Form.Label>
                            <Form.Select name="idioma">
                                <option selected value="ingles">Inglés</option>
                                <option value="aleman">Alemán</option>
                                <option value="italiano">Italiano</option>
                                <option value="portugues">Portugués</option>
                                <option value="frances">Francés</option>
                                <option value="ruso">Ruso</option>
                                <option value="japones">Japones</option>
                                <option value="chino">Chino</option>
                                <option value="quechua">Quechua</option>
                                <option value="aymara">Aymara</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col sx={12} md={12} lg={4}>
                        <Form.Label>Elegí la fecha: </Form.Label>
                        <InputGroup className="mb-3" name="fecha">
                            <Form.Control
                                type="datetime-local"
                                min="2022-12-01T00:00"
                                max="2023-12-31T23:59"
                                name="fecha"
                            />
                        </InputGroup>
                    </Col>
                    <Col sx={12} md={12} lg={4}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Elegí el tipo de curso:</Form.Label>
                            <Form.Select name="curso">
                                <option selected value="extensivo">Cursos extensivos</option>
                                <option value="intensivo">Cursos intensivos</option>
                                <option value="particular">Horas particulares</option>
                                <option value="conversacion">Taller de conversación</option>
                                <option value="literatura">Taller de literatura</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group className="mb-3" >
                        <Form.Label>Aclaraciones</Form.Label>
                        <Form.Control name="aclaracion" as="textarea" type="text" placeholder="Especificá tu reserva" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="confirmacion">
                        <Form.Check type="checkbox" label="Confirmar datos ingresados" />
                    </Form.Group>
                </Row>
                <Enviado />
            </Form >
        </Container>
    );
};

export default Reserva;