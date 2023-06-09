import React from 'react'
import './servicios.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import imgExt from '../../assets/img/extensivos.webp';

export const Extensivos = () => {
    return (
        <Container fluid className='tablas p-4 w-100'>
            <Row className='justify-content-center'>
                <Col xs={12} md={12} lg={5}>
                    <img className="imgGrupo shadow p-1 my-2 bg-white rounded w-100" src={imgExt} alt="Grupo cursos extensivos"></img>
                </Col>
                <Col xs={12} md={12} lg={6} className='text-center my-auto'>
                        <h2 span style={{ color: '#0066cc' }}>Cursos extensivos</h2>
                        <h5 span style={{ color: '#5e9ecc' }}>Sin apuros</h5>
                        <p className="text-center w-100">Los cursos extensivos de <span style={{ color: '#0066cc' , fontWeight: 'bolder' }}>Fluently</span> están dirigidos a personas que desean adquirir una nueva lengua extranjera sin apuros, a su ritmo. Esta modalidad de cursada implica la misma duración de cursada por niveles, pero con una menor carga horaria semanal.
                        <br />
                        Muchas personas prefieren ir a un ritmo regular de cursada, logrando avanzar un nivel por semestre, puediendo siempre complementar con cursos de conversación o formando parte de los talleres literarios que ofrece <span style={{ color: '#0066cc' , fontWeight: 'bolder' }}>Fluently</span>
                        </p>
                </Col>
            </Row>
            <Row>
                <div className='mt-4'>
                    <ListGroup>
                        <ListGroup.Item>Duración: 16 semanas.</ListGroup.Item>
                        <ListGroup.Item>Cursada: 1 encuentro semanal de 3 horas.</ListGroup.Item>
                        <ListGroup.Item>Número máximo de participantes: 12 personas.</ListGroup.Item>
                        <ListGroup.Item>Disponible para idiomas: todos.</ListGroup.Item>
                        <ListGroup.Item>Modalidad: virtual o presencial.</ListGroup.Item>
                    </ListGroup>
                </div>
            </Row>
            <Row>
                <div className='promocionExt mt-4 text-center'>
                    <h1 className=" w-100">Combo: Extensivo - Literario</h1>
                    <h5>Querés complementar tu curso formando parte de un grupo literario?</h5>
                    <h4>Curso + taller literario con un <b>25% de descuento</b></h4>
                    <p className="text-center w-100">Reservá ya tu vacante!</p>
                </div>
            </Row>
        </Container>
    )
}

export default Extensivos
