import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import AlertCursos from '../../alerts/alertCursos';

function BorrarCursos() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div
            className="modal show w-150"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="danger" type="submit" value="Enviar" onClick={handleShow}>Borrar curso(s)</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Borrar curso(s)</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                    <Form.Group as={Col} controlId="idioma">
                            <Form.Label><h5>Seleccioná curso(s) a eliminar </h5></Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check // prettier-ignore
                                    type={type}
                                    id={`default-${type}`}
                                    label={`default ${type}`}
                                />

                            </div>
                        ))}
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <AlertCursos/>
                    <Button variant="danger" type="submit">Borrar selección(ados)</Button>
                    <Button variant="secondary">Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BorrarCursos;