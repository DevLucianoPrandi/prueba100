import Button from 'react-bootstrap/Button';
import { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { saveUsuario } from '../../services';

function CrearUsuarios() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, setUser] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [fechadenac, setFechadenac] = useState("");
    const [dni, setDni] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [categoria, setCategoria] = useState("");

    const inputFileRef = useRef()

    const handleSubmit = (usuarioData) => {
        saveUsuario(usuarioData = {
            user: user,
            nombre: nombre,
            apellido: apellido,
            fechadenac: fechadenac,
            dni: dni,
            telefono: telefono,
            email: email, password: password,
            imagen: inputFileRef.current.files[0],
            categoria: categoria,
        })

            .then((response) => {
                handleClose()
                window.location.reload()
            });
    }

    function mostrarContrasena() {
        const passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Button className=' shadow m-3' variant="success" type="submit" value="Enviar" onClick={handleShow}>Crear usuario</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear un/a usuario/a</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="user">
                                <Form.Label>Nombre de usuario/a</Form.Label>
                                <Form.Control placeholder="Ingresá un nombre de usuario" name='user' onChange={(event) => { setUser(event.target.value) }} required/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control placeholder="Nombre" name='nombre' onChange={(event) => { setNombre(event.target.value) }} required/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="apellido">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control placeholder="Apellido" name='apellido' onChange={(event) => { setApellido(event.target.value) }} required/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="fechadenac">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control placeholder="Ingresá la fecha de nacimiento" name='fechadenac' type='date' onChange={(event) => { setFechadenac(event.target.value) }} required/>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="dni">
                                <Form.Label>Número de DNI</Form.Label>
                                <Form.Control placeholder="Ingresá número de DNI sin puntos ni espacios" name='dni' onChange={(event) => { setDni(event.target.value) }} required/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="telefono">
                                <Form.Label>Número de teléfono</Form.Label>
                                <Form.Control placeholder="Ingresá número de teléfono sin puntos ni espacios" name='telefono' onChange={(event) => { setTelefono(event.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type='email' placeholder="Ingresá un correo electrónico" name='email' onChange={(event) => { setEmail(event.target.value) }} required/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder="Ingresá un password temporal" name='password' onChange={(event) => { setPassword(event.target.value) }} required/>
                                <Form.Check className='m-2 content-justify-center' type="switch" id="custom-switch" label="Mostrar contraseña" onClick={mostrarContrasena} />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="imagen" className="mb-3">
                            <Form.Label>Seleccioná imagen de perfíl</Form.Label>
                            <Form.Control type="file" ref={inputFileRef} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="categoria">
                                <Form.Select className='mb-3' name='categoria' onChange={(event) => { setCategoria(event.target.value) }} required>
                                    <option>Seleccioná una categoría</option>
                                    <option value="alumno">Alumno</option>
                                    <option value="administrador">Administrador</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" type="submit" onClick={handleSubmit}  >Agregar usuario</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CrearUsuarios;