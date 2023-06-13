import Button from 'react-bootstrap/Button';
import { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { saveIdioma } from '../../services';

function CrearIdiomas() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [idioma,setIdioma] = useState ("");
    const [descripcion, setDescripcion] = useState ("");
    const [paises, setPaises] = useState ("");
    const [boton, setBoton] = useState ("");

    const inputFileRef = useRef()

    const handleSubmit = (idiomaData) => {
       saveIdioma (idiomaData= {nombre: idioma, descripcion: descripcion, paises: paises, boton: boton, imagen: `storage/imgs/` + inputFileRef.current.files[0]})
       console.log(idiomaData);
        }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="success" type="submit" value="Enviar" onClick={handleShow}>Crear idioma</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear un idioma</Modal.Title>
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
                            <Form.Group as={Col} controlId="descripcion">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control name='descripcion' placeholder="Descripción del idioma" onChange={(event) => {setDescripcion(event.target.value)}} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="paises">
                            <Form.Label>Países</Form.Label>
                            <Form.Control placeholder="Países en los que se habla el idioma" name='paises' onChange={(event) => {setPaises(event.target.value)}} />
                        </Form.Group>

                        <Form.Group controlId="imagen" className="mb-3">
                            <Form.Label>Seleccionar bandera</Form.Label>
                            <Form.Control type="file" ref={inputFileRef} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="boton">
                                <Form.Label>Texto para el botón</Form.Label>
                                <Form.Control placeholder="Texto que se mostrará en el botón" name='boton' onChange={(event) => {setBoton(event.target.value)}} />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" type="submit" onClick={handleSubmit}>Agregar idioma</Button>
                    <Button variant="danger">Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CrearIdiomas;