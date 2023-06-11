import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ActInscripciones() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>Actualizar inscripción</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar una inscripción</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                        <Form.Group as={Col} controlId="idioma">
                            <Form.Label>Seleccioná una inscripción</Form.Label>
                            <Form.Select>
                                <option>Seleccioná una inscripción</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="usuario">
                            <Form.Label>Nombre usuario</Form.Label>
                                <Form.Control placeholder="Nombre del usuario" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="descripcion">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control placeholder="Descripción del idioma" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="paises">
                            <Form.Label>Países</Form.Label>
                            <Form.Control placeholder="Países en los que se habla el idioma" />
                        </Form.Group>

                        <Form.Group controlId="imagen" className="mb-3">
                            <Form.Label>Seleccionar bandera</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="boton">
                                <Form.Label>Texto para el botón</Form.Label>
                                <Form.Control placeholder="Texto que se mostrará en el botón" />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" type="submit">Actualizar</Button>
                    <Button variant="danger">Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ActInscripciones;