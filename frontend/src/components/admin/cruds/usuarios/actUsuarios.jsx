import Button from 'react-bootstrap/Button';
import React, { useState, useEffect, useRef } from 'react';
import { getUsuarios, updateUsuarios } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';

function ActUsuarios() {

    const [usuarios, setUsuarios] = useState([])
    const [usuarioSel, setUsuarioSel] = useState({});
    const [datosUsuario, setDatosUsuario] = useState({})

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
        setDatosUsuario(usuarioSel);;
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputFileRef = useRef()

    const handleSubmit = () => {

        const newUser = datosUsuario.user;
        const newNombre = datosUsuario.nombre;
        const newApellido = datosUsuario.apellido;
        const newFechadenac = datosUsuario.fechadenac;
        const newDni = datosUsuario.dni;
        const newTelefono = datosUsuario.telefono;
        const newEmail = datosUsuario.email;
        const newPassword = datosUsuario.password;
        const newCategoria = datosUsuario.categoria;
        const newImagen = datosUsuario.imagen;

        const datosNuevos = {
            user: newUser,
            nombre: newNombre,
            apellido: newApellido,
            fechadenach: newFechadenac,
            dni: newDni,
            telefono: newTelefono,
            email: newEmail,
            password: newPassword,
            categoria: newCategoria,
            imagen: newImagen,
        }

        const confirmActualizar = window.confirm(`¿Estás seguro de que deseas actualizar este/a usuario/a?`);

        if (confirmActualizar) {
            updateUsuarios(usuarioSel, datosNuevos)
                .then((response) => {
                    handleClose()
                    //window.location.reload()
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
            <Button className=' shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>Actualizar usuario</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar un/a usuario/a</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Form>
                            <Form.Group as={Col} controlId="usuario">
                                <Form.Select className='mb-3' value={usuarioSel} onChange={handleSelUsuario}>
                                    {usuarios.map((usuarios) => (
                                        <option key={usuarios._id} value={usuarios._id}>
                                            {usuarios.nombre} {usuarios.apellido}
                                        </option>
                                    ))
                                    }
                                    console.log(usuarios);
                                </Form.Select>
                            </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="usuario">
                                <Form.Label>Nombre de usuario/a</Form.Label>
                                <Form.Control placeholder={usuarios.user || ''} name='user' onChange={(event) => { setDatosUsuario({ ...datosUsuario, user: event.target.value, }); }} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control placeholder={usuarios.nombre || ''} name='nombre' onChange={(event) => { setDatosUsuario({ ...datosUsuario, nombre: event.target.value, }); }} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="apellido">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control placeholder={usuarios.apellido || ''} name='apellido' onChange={(event) => { setDatosUsuario({ ...datosUsuario, apellido: event.target.value, }); }} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="fechadenac">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control placeholder={usuarios.fechadenac || ''} name='fechadenac' onChange={(event) => { setDatosUsuario({ ...datosUsuario, fechadenac: event.target.value, }); }} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="dni">
                                <Form.Label>Número de DNI</Form.Label>
                                <Form.Control placeholder={usuarios.dni || ''} name='dni' onChange={(event) => { setDatosUsuario({ ...datosUsuario, dni: event.target.value, }); }} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="telefono">
                                <Form.Label>Número de teléfono</Form.Label>
                                <Form.Control placeholder={usuarios.telefono || ''} name='telefono' onChange={(event) => { setDatosUsuario({ ...datosUsuario, telefono: event.target.value, }); }} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type='email' placeholder={usuarios.email || ''} name='email' onChange={(event) => { setDatosUsuario({ ...datosUsuario, email: event.target.value, }); }} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder={usuarios.password || ''} name='password' onChange={(event) => { setDatosUsuario({ ...datosUsuario, password: event.target.value, }); }} />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="imagen" className="mb-3">
                            <Form.Label>Seleccioná imagen de perfíl</Form.Label>
                            <Form.Control type="file" ref={inputFileRef} />
                        </Form.Group>

                        <Row className="mb-3">
                        <Form.Group as={Col} controlId="categoria">
                                <Form.Select className='mb-3' name='categoria' onChange={(event) => { setDatosUsuario({ ...datosUsuario, categoria: event.target.value, }); }}>
                                    <option>Seleccioná una categoría</option>
                                    <option  value="alumno">Alumno</option>
                                    <option  value="administrador">Administrador</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                    </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Actualizar usuario</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ActUsuarios;