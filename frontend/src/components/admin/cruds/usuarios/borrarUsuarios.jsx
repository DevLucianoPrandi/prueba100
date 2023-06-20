import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { getUsuarios, deleteUsuario } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

function BorrarUsuarios() {

    const [usuarios, setUsuarios] = useState([])
    const [usuarioSel, setUsuarioSel] = useState({});

    useEffect(() => {
        async function cargaUsuarios() {
            const response = await getUsuarios()

            if (response.status === 200) {
                setUsuarios(response.data.usuarios)
            }
        }
        cargaUsuarios()
    }, [])

    const handleSelUsuario = (event) => {
        setUsuarioSel(event.target.value);
        console.log(usuarioSel);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");

        if (confirmDelete) {
        deleteUsuario(usuarioSel)
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
            <Button className=' shadow m-3' variant="danger" type="submit" value="Enviar" onClick={handleShow}>Borrar usuario</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Borrar un/a usuario/a</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Form>
                            <Form.Group as={Col} controlId="usuario">
                                <Form.Select className='mb-3' value={usuarioSel} onChange={handleSelUsuario}>
                                    {usuarios.map((usuarios) => (
                                        <option key={usuarios._id} value={usuarios._id}>
                                            {usuarios.nombre}
                                        </option>
                                    ))
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Form>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleDelete}>Borrar usuario/a</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BorrarUsuarios;