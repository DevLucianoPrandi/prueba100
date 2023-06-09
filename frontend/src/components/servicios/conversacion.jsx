import React from 'react'
import './servicios.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Conversacion = () => {
  return (
    <Container fluid className='tablas w-100 p-4'>
      <Row className='justify-content-center'>
        <Col xs={12} md={12} lg={6} >
          <div className='w-80 text-center'>
            <h2 span style={{ color: '#0066cc' }}>Talleres de conversación</h2>
            <h4 style={{ color: '#5e9ecc' }}>Aprender hablando</h4>
            <p className="text-center mx-auto"><span style={{ color: '#0066cc', fontWeight: 'bold' }}>Fluently</span> te ofrece la posibilidad de poner en práctica el idioma que estás aprendiendo. La propuesta apunta a tener encuentros semanales de 2 horas con otros alumnos de diferentes cursos que también quieran poner a prueba sus conocimientos.
              <br />
              Para conocer más sobre este y otros talleres que ofrece <span style={{ color: '#0066cc', fontWeight: 'bold' }}>Fluently</span> para complementar o como alternativa a los cursos extensivos e intensivos, comunicate con nosotros y sacate todas las dudas.
            </p>
            <ListGroup>
              <ListGroup.Item>Duración: indefinido.</ListGroup.Item>
              <ListGroup.Item>Cursada: según necesidad.</ListGroup.Item>
              <ListGroup.Item>Número máximo de participantes: 2 personas.</ListGroup.Item>
              <ListGroup.Item>Disponible para idiomas: inglés, alemán, italiano, portugués y francés.</ListGroup.Item>
              <ListGroup.Item>Modalidad: virtual.</ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col xs={12} md={12} lg={6}>
          <div className='promocionPart'>
            <h1>Ahorrá aprendiendo más!</h1>
            <h5>Obtené descuentos por cantidad de horas. Más estudiás, menos pagás!</h5>
            <p>Reservá tus horas!</p>
          </div>
        </Col>
      </Row>
      <Row className='text-center mt-3'>
        <hr />
          <div class="ratio ratio-16x9 px-4 shadow my-1">
            <iframe src="https://www.youtube.com/embed/xGhbhWUqL-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
      </Row>
    </Container>
  )
}
export default Conversacion