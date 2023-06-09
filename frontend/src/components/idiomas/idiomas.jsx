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
        <Container className='backGround'>
            <h2 className='titulo'>Eligí el idioma que quieras aprender!</h2>
                {
                idiomas.map(({nombre, descripcion, boton, paises, imagen})=>(
                    <Container>
                <Row className='tarjetas pb-3' >
                <Col xs={12} md={6} lg={4} >
                    <Card className='shadow text-center mx-auto'>
                        <Card.Img style={{ width: '14em' }} variant=" mx-auto mt-3 rounded" src={process.env.PUBLIC_URL + imagen} />
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{nombre}</h4></Card.Title>
                            <Card.Text className='textoTarj w-100'>
                                {descripcion}
                                <hr />
                                Idiomas en los que se habla {nombre}: {paises}
                            </Card.Text>
                            <Button style={{ width: '12em', marginTop: '0.5em' }} variant="outline-primary" as={Link} to="../reserva">{boton}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                </Container>
                ))
                }
        </Container >
    );
};
export default Idiomas