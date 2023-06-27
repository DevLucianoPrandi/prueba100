import React, { useState, useEffect } from 'react';
import { getIdiomas } from './services';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/esm/Image';
import Container from 'react-bootstrap/Container'
import CrearIdiomas from './cruds/idiomas/crearIdiomas';
import BorrarIdiomas from './cruds/idiomas/borrarIdiomas';
import ActIdiomas from './cruds/idiomas/actIdiomas';

export const AdmIdiomas = () => {

    const [idiomas, setIdiomas] = useState([])

    useEffect(() => {
        async function cargaIdiomas() {
            const response = await getIdiomas()

            if (response.status === 200) {
                setIdiomas(response.data.idiomas)
            }
        }
        cargaIdiomas()
    }, [])

    if (!idiomas.length) {
        return <div className='text-center'>Cargando contenido...</div>
    }

    return (
        <><Container className='d-flex justify-content-between fluid w-50 '>

            <CrearIdiomas />
            <ActIdiomas />
            <BorrarIdiomas />

        </Container>

            <Container className='fluid'>
                {idiomas.map(({ _id, nombre, descripcion, boton, paises, imagen }) => (

                    <ListGroup key={_id} as="ol" numbered className='m-3' style={{ border: '3px solid grey' }}>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Idioma</div>
                                {nombre}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Bandera</div>
                                <Image style={{ border: '3px solid grey', height: '3rem', width: 'auto' }} className='shadow mb-2' src={process.env.PUBLIC_URL + imagen} rounded />
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Descripción</div>
                                {descripcion}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Países en los que se habla</div>
                                {paises}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Texto del botón</div>
                                {boton}
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                )
                )}
            </Container></>
    );
};
export default AdmIdiomas