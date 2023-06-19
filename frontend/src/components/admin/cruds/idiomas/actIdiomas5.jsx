import Button from 'react-bootstrap/Button';
import React, { useState, useEffect, useRef } from 'react';
import { getIdiomas } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { updateIdioma } from '../../services';
import Container from 'react-bootstrap/esm/Container';

function UpdateIdiomas() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [idiomas, setIdiomas] = useState([]);
    const [idioma, setIdioma] = useState({});

    useEffect(() => {
        async function cargaIdiomas() {
            const response = await getIdiomas()

            if (response.status === 200) {
                setIdiomas(response.data.idiomas)
            }
        }
        cargaIdiomas()
    }, [])

    {
        setIdioma(idioma);
    };

    return (
        <div className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>Actualizar idioma</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar un idioma</Modal.Title>
                </Modal.Header>

                <ul>
                    {idiomas.map((idioma) => (
                        <li key={idiomas._id}>
                            <button onClick={() => updateIdioma(idioma)}>
                                {idiomas.nombre}
                            </button>
                        </li>
                    ))}
                </ul>
                {idioma._id && (
                    <Form onSubmit={updateIdioma}>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                value={idiomas.nombre || ''}
                                onChange={(e) =>
                                    setIdioma({ ...idioma, nombre: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="descripcion">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={idiomas.descripcion || ''}
                                onChange={(e) =>
                                    setIdioma({ ...idioma, descripcion: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Actualizar
                        </Button>
                    </Form>

                )}
            </Modal>
        </div>
    );

};


export default UpdateIdiomas;