import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function CrearUsuarios() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="success" type="submit" value="Enviar" onClick={handleShow}>Crear usuario</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear un usuario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="usuario">
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control placeholder="Ingresá un nombre de usuario" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control placeholder="Nombre" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="apellido">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control placeholder="Apellido" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="fechadenac">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control placeholder="Ingresá la fecha de nacimiento" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="dni">
                                <Form.Label>Número de DNI</Form.Label>
                                <Form.Control placeholder="Ingresá número de DNI sin puntos ni espacios" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="telefono">
                                <Form.Label>Número de teléfono</Form.Label>
                                <Form.Control placeholder="Ingresá número de teléfono sin puntos ni espacios" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control placeholder="Ingresá un correo electrónico" />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="imagen" className="mb-3">
                            <Form.Label>Seleccioná imagen de perfíl</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="categoria">
                                <Form.Label>Seleccioná categoría</Form.Label>
                                <Form.Select>
                                    <option>Seleccioná un categoría</option>
                                    <option value="alumno">Alumno</option>
                                    <option value="administrador">Administrador</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" type="submit">Agregar usuario</Button>
                    <Button variant="danger">Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CrearUsuarios;