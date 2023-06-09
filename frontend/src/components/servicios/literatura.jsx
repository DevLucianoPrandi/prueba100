import React from 'react'
import './servicios.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import imgLit1 from '../../assets/img/literatura.jpg';
import imgLit2 from '../../assets/img/literatura2.jpg';
import imgLit3 from '../../assets/img/literatura3.jpg';
import imgLit4 from '../../assets/img/literatura4.jpg';

export const Literatura = () => {
  return (
    <Container fluid className='tablas p-4 w-100'>
      <Row >
        <Col sx={6} md={6} lg={3} className='my-auto'>
          <div>
            <img className="imgLit shadow p-1 my-2 bg-white rounded w-100" src={imgLit1} alt="Grupo cursos extensivos"></img>
            <img className="imgLit shadow p-1 my-2 bg-white rounded w-100" src={imgLit3} alt="Grupo cursos extensivos"></img>
          </div>
        </Col>
        <Col xs={12} md={12} lg={6} className='my-auto'>
          <h2 span style={{ color: '#0066cc' }}>Taller de literatura</h2>
          <h5 style={{ textAlign: 'justify', color: '#5e9ecc' }}>Aprender haciendo:</h5>
          <p className='w-100'>Los talleres de literatura de <span style={{ color: '#0066cc' , fontWeight: 'bolder' }}>Fluently</span> apuntan a reforzar y mantener el nivel idiomático alcanzado por el alumno. Con encuentros semanales de 2 horas, donde se abordaran temáticas de discusión basadas en una serie determinada de libros propuesta por el docente, se abre un espacio de intercambio idiomático y de ideas a fines de poner en práctica los conocimientos adquiridos.
            <br />
            Muchos alumnos eligen complementar los cursos de idioma regulares o intensivos que ofrece <span style={{ color: '#0066cc' , fontWeight: 'bolder' }}>Fluently</span> participando de estos talleres abiertos a todo el público con un determinado nivel de idioma, que le permita abordar los textos propuestos.
          </p>
        </Col>
        <Col sx={6} md={6} lg={3} className='my-auto'>
          <div>
            <img className="imgLit shadow p-1 my-2 bg-white rounded w-100" src={imgLit2} alt="Grupo cursos extensivos"></img>
            <img className="imgLit shadow p-1 my-2 bg-white rounded w-100" src={imgLit4} alt="Grupo cursos extensivos"></img>
          </div>
        </Col>
      </Row>
      <Row>
        <div className='mt-4'>
          <ListGroup>
            <ListGroup.Item>Duración: 16 semanas.</ListGroup.Item>
            <ListGroup.Item>Cursada: 1 encuentro semanal de 2 horas.</ListGroup.Item>
            <ListGroup.Item>Número máximo de participantes: 6 personas.</ListGroup.Item>
            <ListGroup.Item>Disponible para idiomas: inglés, alemán, francés e italiano.</ListGroup.Item>
            <ListGroup.Item>Modalidad: virtual o presencial, sujeto a disponibilidad.</ListGroup.Item>
          </ListGroup>
        </div>
      </Row>
      <Row>
        <div className='promocionInt p-4 mt-4'>
          <h1>Combo: Intensivo - Conversación</h1>
          <h5>Querés complementar tu curso charlando sobre diferentes temas actuales y de interés general?</h5>
          <h4>Curso + taller de conversación con un <b span style={{ color: '#ffffff' }}>20% de descuento</b></h4>
          <p>Reservá ya tu vacante!</p>
        </div>
      </Row>
    </Container >
  )
}
export default Literatura