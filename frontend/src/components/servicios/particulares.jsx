import React from 'react'
import './servicios.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import imgPart from '../../assets/img/particular.jpg';

export const Particulares = () => {
  return (
    <Container fluid className='tablas w-100 p-4'>
      <Row >
          <img className="imgGrupo shadow p-1 my-2 bg-white rounded w-100" src={imgPart} alt="Clases particulares"></img>
      </Row>
      <Row >
        <Col xs={12} md={12} lg={6} >
          <div className='my-4'>
            <h2 span style={{ color: '#0066cc' }}>Clases particulares</h2>
            <h5 style={{ textAlign: 'justify', color: '#5e9ecc' }}>A tu medida:</h5>
            <p className='w-100'>En <span style={{ color: '#0066cc' , fontWeight: 'bolder' }}>Fluently</span> podés reservar horas particulares que se ajusten a tu ritmo y tus necesidades. La posibilidad de reservar horas de clases individuales (válido para máximo 2 personas) apunta a ofrecer un espacio donde el alumno pueda trabajar sobre sus dudas y avanzar a su propio ritmo basado en necesidades específicas.
            <br />
            Para conocer más sobre esta modalidad que ofrece <span style={{ color: '#0066cc' , fontWeight: 'bolder' }}>Fluently</span> como alternativa a los cursos extensivos e intensivos, comunicate con nosotros y sacate todas las dudas.
            </p>

          <ListGroup style={{marginTop:"2.25em"}}>
            <ListGroup.Item>Duración: indefinido.</ListGroup.Item>
            <ListGroup.Item>Cursada: según necesidad.</ListGroup.Item>
            <ListGroup.Item>Número máximo de participantes: 2 personas.</ListGroup.Item>
            <ListGroup.Item>Disponible para idiomas: inglés, alemán, italiano, portugués y francés.</ListGroup.Item>
            <ListGroup.Item>Modalidad: virtual.</ListGroup.Item>
          </ListGroup>
          </div>
        </Col>
        <Col xs={12} md={12} lg={6}>
          <div className='promocionPart mt-4'>
            <h1>Ahorrá aprendiendo más!</h1>
            <h5>Obtené descuentos por cantidad de horas. Más estudiás, menos pagás!</h5>
            <p>Reservá tus horas!</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Particulares