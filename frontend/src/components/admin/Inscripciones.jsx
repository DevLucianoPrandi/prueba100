import React, { useState, useEffect } from 'react';
import { getInscripciones } from './services';
import { getAlumnos } from './services';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ActInscripciones from './cruds/inscripciones/actInscripciones';
import BorrarInscripciones from './cruds/inscripciones/borrarInscripciones';
import CrearInscripciones from './cruds/inscripciones/crearInscripciones';

export const Inscripciones = () => {

    const [inscripciones, setInscripciones] = useState([])

    useEffect(() => {
        async function cargaInscripciones() {
            const response = await getInscripciones()

            if (response.status === 200) {
                setInscripciones(response.data.inscripciones)
            }
        }
        cargaInscripciones()
    }, [])

    if (!inscripciones.length) {
        return <div className='text-center'>Cargando contenido...</div>
    }

    return (
        <Container className=' fluid'>
            <Container className='d-flex justify-content-between fluid w-50 '>
                <CrearInscripciones />
                <ActInscripciones />
                <BorrarInscripciones />
            </Container>
            {
                inscripciones.map(({ idioma, dia, horario, modalidad }) => (

                    <ListGroup as="ol" numbered className='m-3' style={{ border: '3px solid grey' }}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start" variant='success'>
                            <div className="ms-2 me-auto" >
                             <h3>Alumno</h3>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Idioma</div>
                                {idioma}
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Día(s) de cursada</div>
                                {dia}
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Horario</div>
                                {horario}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Modalidad de cursada</div>
                                {modalidad}
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                ))}
        </Container >
    );
};
export default Inscripciones