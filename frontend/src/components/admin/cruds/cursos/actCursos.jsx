import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { getCursos, updateCursos } from '../../services';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';

function ActCursos() {

    const [cursos, setCursos] = useState([])
    const [cursoSel, setCursoSel] = useState({});
    const [datosCurso, setDatosCurso] = useState({})

    useEffect(() => {
        async function cargaCursos() {
            const response = await getCursos()

            if (response.status === 200) {
                setCursos(response.data.cursos)
            }
        }
        cargaCursos()
    }, [])

    const handleSelCurso = (event) => {
        setCursoSel(event.target.value);
        setDatosCurso(cursoSel);;
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        const newCurso = datosCurso.nombre;
        const newDia = datosCurso.dia;
        const newHorario = datosCurso.horario;
        const newModalidad = datosCurso.modalidad;

        const datosNuevos = {
            nombre: newCurso,
            dia: newDia,
            pais: newHorario,
            modalidad: newModalidad,
        }

        const confirmActualizar = window.confirm(`¿Estás seguro de que deseas actualizar este curso?`);

        if (confirmActualizar) {
            updateCursos(cursoSel, datosNuevos)
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
            <Button className=' shadow m-3' variant="primary" type="submit" value="Enviar" onClick={handleShow}>Actualizar curso</Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar un curso</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Form>
                            <Form.Group as={Col} controlId="curso">
                                <Form.Select className='mb-3' value={cursoSel} onChange={handleSelCurso}>
                                    {cursos.map((cursos) => (
                                        <option key={cursos._id} value={cursos._id}>
                                            {cursos.nombre}
                                        </option>
                                    ))
                                    }
                                    console.log(cursos);
                                </Form.Select>
                            </Form.Group>
                            {(
                                <div><Row className="mb-3">
                                    <Form.Group as={Col} controlId="nombre">
                                        <Form.Label>Curso</Form.Label>
                                        <Form.Control placeholder={cursos.nombre || ''} name='nombre' onChange={(event) => { setDatosCurso({ ...datosCurso, nombre: event.target.value, }); }} />
                                    </Form.Group>
                                </Row><Row className="mb-3">
                                        <Form.Group as={Col} controlId="dia">
                                            <Form.Label>Descripción</Form.Label>
                                            <Form.Control name='dia' placeholder={cursos.dia || ''} onChange={(event) => { setDatosCurso({ ...datosCurso, descripción: event.target.value, }); }} />
                                        </Form.Group>
                                    </Row><Form.Group className="mb-3" controlId="horario">
                                        <Form.Label>Países</Form.Label>
                                        <Form.Control placeholder={cursos.pises || ''} name='horario' onChange={(event) => { setDatosCurso({ ...datosCurso, horario: event.target.value, }); }} />
                                    </Form.Group><Row className="mb-3">
                                        <Form.Group as={Col} controlId="modalidad">
                                            <Form.Select className='mb-3' value={cursoSel} onChange={(event) => { setDatosCurso({ ...datosCurso, modalidad: event.target.value, }); }}>
                                                <option>Seleccioná una modalidad</option>
                                                <option value="extensivo">Extensivo</option>
                                                <option value="intensivo">Intensivo</option>
                                                <option value="conversación">Conversación</option>
                                                <option value="literatura">Literatura</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row></div>
                            )}
                        </Form>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Actualizar curso</Button>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ActCursos;