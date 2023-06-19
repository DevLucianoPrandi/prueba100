import Button from 'react-bootstrap/Button';
import React, { useState, useEffect, useRef } from 'react';
import { getIdiomas } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { updateIdioma } from '../../services';
import Container from 'react-bootstrap/esm/Container';

function ActIdiomas() {

    const [idiomas, setIdiomas] = useState([])
    const [formulario, setFormulario] = useState({});

    useEffect(() => {
        async function cargaIdiomas() {
            const response = await getIdiomas()

            if (response.status === 200) {
                setIdiomas(response.data.idiomas)
            }
        }
        cargaIdiomas()
    }, [])

    const handleSeleccionarIdioma = (idioma) => {
        setFormulario(idioma._id);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [paises, setPaises] = useState("");
    const [boton, setBoton] = useState("");

    const inputFileRef = useRef()

    const handleSubmit = (idiomaData) => {
        updateIdioma(idiomaData = { nombre: nombre, descripcion: descripcion, paises: paises, boton: boton, imagen: `storage/imgs/` + inputFileRef.current.files[0] })
        console.log(idiomaData);
    }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>Actualizar idioma</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar un idioma</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Form>
                            <Form.Group as={Col} controlId="idioma">
                                <Form.Select className='mb-3'>
                                    {idiomas.map((idiomas) => (
                                        <option key={idiomas._id}>
                                            <button onClick={() => handleSeleccionarIdioma(idiomas._id)}>
                                                {idiomas.nombre}
                                            </button>
                                        </option>
                                    ))
                                    }
                                    console.log(idiomas);
                                </Form.Select>
                            </Form.Group>
                            {idiomas._id && (
                                <div><Row className="mb-3">
                                    <Form.Group as={Col} controlId="nombre">
                                        <Form.Label>Idioma</Form.Label>
                                        <Form.Control placeholder={idiomas.nombre || ''} name='nombre' onChange={(event) => { setNombre(event.target.value); }} />
                                    </Form.Group>
                                </Row><Row className="mb-3">
                                        <Form.Group as={Col} controlId="descripcion">
                                            <Form.Label>Descripción</Form.Label>
                                            <Form.Control name='descripcion' placeholder={idiomas.descripcion || ''} onChange={(event) => { setDescripcion(event.target.value); }} />
                                        </Form.Group>
                                    </Row><Form.Group className="mb-3" controlId="paises">
                                        <Form.Label>Países</Form.Label>
                                        <Form.Control placeholder={idiomas.pises || ''} name='paises' onChange={(event) => { setPaises(event.target.value); }} />
                                    </Form.Group><Form.Group controlId="imagen" className="mb-3">
                                        <Form.Label>Seleccionar bandera</Form.Label>
                                        <Form.Control type="file" ref={inputFileRef} />
                                    </Form.Group><Row className="mb-3">
                                        <Form.Group as={Col} controlId="boton">
                                            <Form.Label>Texto para el botón</Form.Label>
                                            <Form.Control placeholder={idiomas.boton || ''} name='boton' onChange={(event) => { setBoton(event.target.value); }} />
                                        </Form.Group>
                                    </Row></div>
                            )}
                        </Form>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Actualizar idioma</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ActIdiomas;