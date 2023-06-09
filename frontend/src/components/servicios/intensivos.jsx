import React from 'react'
import './servicios.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import imgInt from '../../assets/img/intensivos.webp';

export const Intensivos = () => {
  return (
    <Container fluid className='tablas w-100 p-4'>
      <Row>
        <Col xs={12} md={12} lg={6} >
          <div >
            <h2 span style={{ color: '#0066cc' }}>Cursos intensivos</h2>
            <h5 style={{ textAlign: 'justify', color: '#5e9ecc' }}>Rápido y furioso:</h5>
            <p className='w-100'>Los cursos intensivos de <span style={{ color: '#0066cc' , fontWeight: 'bolder' }}>Fluently</span> están dirigidos a personas que necesitan aprender el idioma de manera acelerada. Esta modalidad de cursada implica la misma duración de cursada por niveles, pero con una mayor carga horaria semanal.
              <br />
              Con la modalidad de cursada intensiva vas a lograr avanzar dos niveles por semestre, pudiendo siempre complementar con cursos de conversación o formando parte de los talleres literarios que ofrece <span style={{ color: '#0066cc' , fontWeight: 'bolder' }}>Fluently</span> dependiendo de tus posibilidades.
            </p>
          </div>
            <ListGroup>
              <ListGroup.Item>Duración: 8 semanas.</ListGroup.Item>
              <ListGroup.Item>Cursada: 2 encuentros semanales de 3 horas.</ListGroup.Item>
              <ListGroup.Item>Número máximo de participantes: 8 personas.</ListGroup.Item>
              <ListGroup.Item>Disponible para idiomas: inglés, alemán, italiano, portugués, francés y quechua.</ListGroup.Item>
              <ListGroup.Item>Modalidad: virtual.</ListGroup.Item>
            </ListGroup>

        </Col>
        <Col xs={12} md={12} lg={6}>
          <div>
            <img className="imgGrupo shadow p-1 my-2 bg-white rounded w-100" src={imgInt} alt="Grupo cursos intensivos"></img>
          </div>
        </Col>
      </Row>
      <div className='promocionInt'>
        <h1>Combo: Intensivo - Conversación</h1>
        <h5>Querés complementar tu curso charlando sobre diferentes temas actuales y de interés general?</h5>
        <h4>Curso + taller de conversación con un <b span style={{ color: '#ffffff' }}>20% de descuento</b></h4>
        <p>Reservá ya tu vacante!</p>
      </div>
    </Container>
  )
}

export default Intensivos