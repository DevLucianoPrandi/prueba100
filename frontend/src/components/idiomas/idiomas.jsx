import React, { useState, useEffect } from 'react';
import { getIdiomas } from './services';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './idiomas.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

export const Idiomas = () => {

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
        <Container className='backGround d-flex'>
            <Row className='tarjetas pb-3' >
            <h2 className='titulo'>Eligí tu curso ideal!</h2>
                {
                    idiomas.map(({ nombre, imagen, descripcion, paises, boton }) => (

                        <Col xs={12} md={8} lg={4} >
                            <Card className='shadow text-center m-2 justify' style={{height:'30rem'}} >
                                <Card.Img style={{ width: '14em', marginTop: '1rem' }} variant=" mx-auto mt-3 rounded" src={process.env.PUBLIC_URL + imagen} />
                                <Card.Body className='text-center mx-auto'>
                                    <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{nombre}</h4></Card.Title>
                                    <Card.Text className='textoTarj w-100'>
                                        {descripcion}
                                        <hr />
                                        Idiomas en los que se habla {nombre}: {paises}
                                    </Card.Text>
                                    <Button className='mt-3' variant="outline-primary" as={Link} to="../reserva">{boton}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container >
    );
};
export default Idiomas