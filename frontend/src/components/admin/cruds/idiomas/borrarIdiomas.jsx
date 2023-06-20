import Button from 'react-bootstrap/Button';
import React, { useState, useEffect, useRef } from 'react';
import { getIdiomas } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { deleteIdioma } from '../../services';
import Container from 'react-bootstrap/esm/Container';

function BorrarIdiomas() {

    const [idiomas, setIdiomas] = useState([])
    const [idiomaSel, setIdiomaSel] = useState({});

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
        console.log(idiomaSel);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este idioma?");

        if (confirmDelete) {
        deleteIdioma(idiomaSel)
        .then ((response) => {
            handleClose()
            window.location.reload()
        })
    .catch((error) => {
      console.log(error);
    });
}
};

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="danger" type="submit" value="Enviar" onClick={handleShow}>Borrar idioma</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Borrar un idioma</Modal.Title>
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
                                </Form.Select>
                            </Form.Group>
                        </Form>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleDelete}>Borrar idioma</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BorrarIdiomas;