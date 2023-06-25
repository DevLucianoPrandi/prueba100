import Button from 'react-bootstrap/Button';
import React, { useState, useEffect, useRef } from 'react';
import { getIdiomas, updateIdioma } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';

function ActIdiomas() {

    const [idiomas, setIdiomas] = useState([])
    const [idiomaSel, setIdiomaSel] = useState({});
    const [datosIdioma, setDatosIdioma] = useState({})

    useEffect(() => {
        async function cargaIdiomas() {
            const response = await getIdiomas()

            if (response.status === 200) {
                setIdiomas(response.data.idiomas)
            }
        }
        cargaIdiomas()
    }, [])

    const handleSelIdioma = (event) => {
        setIdiomaSel(event.target.value);
        setDatosIdioma(idiomaSel);;
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputFileRef = useRef()

    const handleSubmit = () => {
        const newNombre = datosIdioma.nombre;
        const newDescripcion = datosIdioma.descripcion;
        const newPaises = datosIdioma.paises;
        const newBoton = datosIdioma.boton;

        const datosNuevos = {
            nombre: newNombre,
            descripcion: newDescripcion,
            paises: newPaises,
            boton: newBoton,
            imagen: `storage/imgs/` + inputFileRef.current.files[0],
        }

        const confirmActualizar = window.confirm(`¿Estás seguro de que deseas actualizar este idioma?`);

        if (confirmActualizar) {
            updateIdioma(idiomaSel, datosNuevos)
                .then((response) => {
                    handleClose()
                    window.location.reload()
                })
                .catch((error) => {
                    console.log(error);
                });
        }

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
                                <Form.Select className='mb-3' value={idiomaSel} onChange={handleSelIdioma}>
                                    {idiomas.map((idiomas) => (
                                        <option key={idiomas._id} value={idiomas._id}>
                                            {idiomas.nombre}
                                        </option>
                                    ))
                                    }
                                    console.log(idiomas);
                                </Form.Select>
                            </Form.Group>
                            {(
                                <div><Row className="mb-3">
                                    <Form.Group as={Col} controlId="nombre">
                                        <Form.Label>Idioma</Form.Label>
                                        <Form.Control placeholder={idiomas.nombre || ''} name='nombre' onChange={(event) => { setDatosIdioma({ ...datosIdioma, nombre: event.target.value, }); }} />
                                    </Form.Group>
                                </Row><Row className="mb-3">
                                        <Form.Group as={Col} controlId="descripcion">
                                            <Form.Label>Descripción</Form.Label>
                                            <Form.Control name='descripcion' placeholder={idiomas.descripcion || ''} onChange={(event) => { setDatosIdioma({ ...datosIdioma, descripcion: event.target.value, }); }} />
                                        </Form.Group>
                                    </Row><Form.Group className="mb-3" controlId="paises">
                                        <Form.Label>Países</Form.Label>
                                        <Form.Control placeholder={idiomas.paises || ''} name='paises' onChange={(event) => { setDatosIdioma({ ...datosIdioma, paises: event.target.value, }); }} />
                                    </Form.Group><Form.Group controlId="imagen" className="mb-3">
                                        <Form.Label>Seleccionar bandera</Form.Label>
                                        <Form.Control type="file" ref={inputFileRef} />
                                    </Form.Group><Row className="mb-3">
                                        <Form.Group as={Col} controlId="boton">
                                            <Form.Label>Texto para el botón</Form.Label>
                                            <Form.Control placeholder={idiomas.boton || ''} name='boton' onChange={(event) => { setDatosIdioma({ ...datosIdioma, boton: event.target.value, }); }} />
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