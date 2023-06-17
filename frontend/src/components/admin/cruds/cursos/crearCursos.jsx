import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { saveCursos } from '../../services';

function CrearCursos() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [idioma,setIdioma] = useState ("");
    const [dia, setDia] = useState ("");
    const [horario, setHorario] = useState ("");
    const [modalidad, setModalidad] = useState ("");

    const handleSubmit = (cursosData) => {
        saveCursos (cursosData= {idioma: idioma, dia: dia, horario: horario, modalidad: modalidad})
        console.log(cursosData);
         }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="success" type="submit" value="Enviar" onClick={handleShow}>Crear curso</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear un curso</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="idioma">
                                <Form.Label>Idioma</Form.Label>
                                <Form.Control placeholder="Nombre del idioma" name='idioma' onChange={(event) => {setIdioma(event.target.value)}} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="dia">
                                <Form.Label>Días de cursada</Form.Label>
                                <Form.Control placeholder="Días de cursada" name='dia' onChange={(event) => {setDia(event.target.value)}} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="horario">
                            <Form.Label>Horario de cursada</Form.Label>
                            <Form.Control placeholder="Horario de cursada" name='horario' onChange={(event) => {setHorario(event.target.value)}} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="modalidad">
                                <Form.Label>Modalidad de cursada</Form.Label>
                                <Form.Control placeholder="Modalidad de cursada"  name='modalidad' onChange={(event) => {setModalidad(event.target.value)}}/>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" type="submit " onClick={handleSubmit}>Agregar curso</Button>
                    <Button variant="danger">Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CrearCursos;