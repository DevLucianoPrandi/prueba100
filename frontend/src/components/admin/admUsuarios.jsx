import React, { useState, useEffect } from 'react';
import { getUsuarios } from './services';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/esm/Image';
import Container from 'react-bootstrap/Container';
import BorrarUsuarios from './cruds/usuarios/borrarUsuarios';
import ActUsuario from './cruds/usuarios/actUsuarios';
import CrearUsuarios from './cruds/usuarios/crearUsuarios';

export const AdmUsuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        async function cargaUsuarios() {
            const response = await getUsuarios()

            if (response.status === 200) {
                setUsuarios(response.data.usuarios)
            }
        }
        cargaUsuarios()
    }, [])

    if (!usuarios.length) {
        return <div className='text-center'>Cargando contenido...</div>
    }

    return (
        <><Container className='d-flex justify-content-between fluid w-50 '>
            <CrearUsuarios />
            <ActUsuario />
            <BorrarUsuarios />
        </Container>
            <Container className=' fluid'>

                {usuarios.map(({_id, user, nombre, apellido, fechadenac, dni, telefono, email, imagen, categoria }) => (

                    <ListGroup key={_id} as="ol" numbered className='m-3' style={{ border: '3px solid grey' }}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start" variant='success'>
                            <div className="ms-2 me-auto">
                                <h3>{[nombre + ' ' + apellido]}</h3>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Nombre de usuario</div>
                                {user}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Imágen de perfíl</div>
                                <Image style={{ border: '3px solid grey', height: '3rem', width: 'auto' }} className='shadow mb-4' src={process.env.PUBLIC_URL + imagen} roundedCircle />
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Fecha de nacimiento</div>
                                {fechadenac}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">DNI</div>
                                {dni}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Dirección de correo electrónico</div>
                                {email}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Teléfono</div>
                                {telefono}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Categoría</div>
                                {categoria}
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </Container></>
    );
};
export default AdmUsuarios