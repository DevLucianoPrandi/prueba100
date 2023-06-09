import React, { useState, useEffect } from 'react';
import { getIdiomas } from './services';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './idiomas.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import IngFlag from '../../assets/img/ingles.png';
import DeuFlag from '../../assets/img/aleman.png';
import ItaFlag from '../../assets/img/italiano.png';
import PorFlag from '../../assets/img/portugues.png';
import FraFlag from '../../assets/img/frances.png';
import RusFlag from '../../assets/img/ruso.png';
import JapFlag from '../../assets/img/japones.png';
import ChinFlag from '../../assets/img/chino.png';
import QueFlag from '../../assets/img/quechua.png';
import AymFlag from '../../assets/img/aymara.png';




function Lenguas(id, idioma, descripcion, frase, paises, bandera) {

    this.id = id;
    this.idioma = idioma;
    this.descripcion = descripcion;
    this.frase = frase;
    this.paises = paises;
    this.bandera = bandera;

};

const Idioma1 = new Lenguas(1, "Inglés", "Uno de los idomas más utilizados de hoy en día en el mundo entero.", "I want to learn this language!", "Inglaterra, EEUU, Jamaica, Australia, Kenia", IngFlag);
const Idioma2 = new Lenguas(2, "Alemán", "Un idioma que abre muchas puertas laborales y culturales.", "Ich möchte diese Sprache lernen!", "Alemania, Austria, Suiza, Principado de Liechtenstein", DeuFlag);
const Idioma3 = new Lenguas(3, "Italiano", "El idioma de nuestros ancestros.", "Voglio imparare questa lingua!", "Italia, San Marino, Suiza", ItaFlag);
const Idioma4 = new Lenguas(4, "Portugués", "Un idioma hablado tanto en América del Sur como en Europa, ideal para intercambios comerciales y vacaciones.", "Eu quero aprender esse idioma!", "Brasil, Portugal, Angola, Cabo Verde", PorFlag);
const Idioma5 = new Lenguas(5, "Francés", "La lengua franca de la realeza, distinguida y elegante. También llamada la lengua del amor.", "Je veux apprendre cette langue !", "Francia, Bélgica, Canadá, Suiza, Senegal", FraFlag);
const Idioma6 = new Lenguas(6, "Ruso", "Idioma indoeuropeo de gran valor, estás pensando en viajar a Europa oriental.", "Я хочу выучить этот язык!", "Rusia, Bielorrusia, Kirguistán y Kazajstán", RusFlag);
const Idioma7 = new Lenguas(7, "Japonés", "Un idioma lleno de carga cultural y una forma de acceder a los Lenguas asiáticos.", "この言語を習得したい!", "Japón, Palaos, Islas Marshall", JapFlag);
const Idioma8 = new Lenguas(8, "Chino", "Lengua milenaria llena de historia y cultura.", "我想学习这种语言!", "Hong Kong, China, Macao, Taiwán", ChinFlag);
const Idioma9 = new Lenguas(9, "Quechua", "Lengua aborigen milenaria de nuestra región.", "¡Kay simita yachayta munani!", "Desde Colombia hasta el norte de Argentina y Chile", QueFlag);
const Idioma10 = new Lenguas(10, "Aymara", "Lengua aborigen milenaria de nuestra región.", "¡Aka aru yateqañ munta!", "Estado Plurinacional de Bolivia, Perú, Chile, Noroeste argentino", AymFlag);

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

if(Idiomas.length === 0){
    return 'No hay nada para mostrar'
}

    return (
        <Container fluid className='backGround'>
            <Row className='tarjetas pb-3'>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow text-center mx-auto'>
                        <Card.Img style={{ width: '14em' }} variant=" mx-auto mt-3 rounded" src={Idioma1.bandera} />
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{Idioma1.idioma}</h4></Card.Title>
                            <Card.Text className='textoTarj w-100'>
                                {Idioma1.descripcion}
                                <hr />
                                Idiomas en los que se habla {Idioma1.idioma}: {Idioma1.paises}
                            </Card.Text>
                            <Button style={{ width: '12em', marginTop: '0.5em' }} variant="outline-primary" as={Link} to="../reserva">{Idioma1.frase}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow text-center mx-auto'>
                        <Card.Img style={{ width: '14em' }} variant=" mx-auto mt-3 rounded" src={Idioma2.bandera} />
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{Idioma2.idioma}</h4></Card.Title>
                            <Card.Text className='textoTarj w-100'>
                                {Idioma2.descripcion}
                                <hr />
                                Idiomas en los que se habla {Idioma2.idioma}: {Idioma2.paises}
                            </Card.Text>
                            <Button style={{ width: '12em', marginTop: '0.5em' }} variant="outline-primary" as={Link} to="../reserva">{Idioma2.frase}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow text-center mx-auto'>
                        <Card.Img style={{ width: '14em' }} variant=" mx-auto mt-3 rounded" src={Idioma3.bandera} />
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{Idioma3.idioma}</h4></Card.Title>
                            <Card.Text className='textoTarj w-100'>
                                {Idioma3.descripcion}
                                <hr />
                                Idiomas en los que se habla {Idioma3.idioma}: {Idioma3.paises}
                            </Card.Text>
                            <Button style={{ width: '12em', marginTop: '0.5em' }} variant="outline-primary" as={Link} to="../reserva">{Idioma3.frase}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='tarjetas mb-3'>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow text-center mx-auto'>
                        <Card.Img style={{ width: '14em' }} variant=" mx-auto mt-3 rounded" src={Idioma4.bandera} />
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{Idioma4.idioma}</h4></Card.Title>
                            <Card.Text className='textoTarj w-100'>
                                {Idioma4.descripcion}
                                <hr />
                                Idiomas en los que se habla {Idioma4.idioma}: {Idioma4.paises}
                            </Card.Text>
                            <Button style={{ width: '12em', marginTop: '0.5em' }} variant="outline-primary" as={Link} to="../reserva">{Idioma4.frase}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow text-center mx-auto'>
                        <Card.Img style={{ width: '14em' }} variant=" mx-auto mt-3 rounded" src={Idioma5.bandera} />
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{Idioma5.idioma}</h4></Card.Title>
                            <Card.Text className='textoTarj w-100'>
                                {Idioma5.descripcion}
                                <hr />
                                Idiomas en los que se habla {Idioma5.idioma}: {Idioma5.paises}
                            </Card.Text>
                            <Button style={{ width: '12em', marginTop: '0.5em' }} variant="outline-primary" as={Link} to="../reserva">{Idioma5.frase}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow text-center mx-auto'>
                        <Card.Img style={{ width: '14em' }} variant=" mx-auto mt-3 rounded" src={Idioma6.bandera} />
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{Idioma6.idioma}</h4></Card.Title>
                            <Card.Text className='textoTarj w-100'>
                                {Idioma6.descripcion}
                                <hr />
                                Idiomas en los que se habla {Idioma6.idioma}: {Idioma6.paises}
                            </Card.Text>
                            <Button style={{ width: '12em', marginTop: '0.5em' }} variant="outline-primary" as={Link} to="../reserva">{Idioma6.frase}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='tarjetas mb-3'>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow text-center mx-auto'>
                        <Card.Img style={{ width: '14em' }} variant=" mx-auto mt-3 rounded" src={Idioma7.bandera} />
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{Idioma7.idioma}</h4></Card.Title>
                            <Card.Text className='textoTarj w-100'>
                                {Idioma7.descripcion}
                                <hr />
                                Idiomas en los que se habla {Idioma7.idioma}: {Idioma7.paises}
                            </Card.Text>
                            <Button style={{ width: '12em', marginTop: '0.5em' }} variant="outline-primary" as={Link} to="../reserva">{Idioma7.frase}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow text-center mx-auto'>
                        <Card.Img style={{ width: '14em' }} variant=" mx-auto mt-3 rounded" src={Idioma8.bandera} />
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{Idioma8.idioma}</h4></Card.Title>
                            <Card.Text className='textoTarj w-100'>
                                {Idioma8.descripcion}
                                <hr />
                                Idiomas en los que se habla {Idioma8.idioma}: {Idioma8.paises}
                            </Card.Text>
                            <Button style={{ width: '12em', marginTop: '0.5em' }} variant="outline-primary" as={Link} to="../reserva">{Idioma8.frase}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow text-center mx-auto'>
                        <Card.Img style={{ width: '14em' }} variant=" mx-auto mt-3 rounded" src={Idioma9.bandera} />
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{Idioma9.idioma}</h4></Card.Title>
                            <Card.Text className='textoTarj w-100'>
                                {Idioma9.descripcion}
                                <hr />
                                Idiomas en los que se habla {Idioma9.idioma}: {Idioma9.paises}
                            </Card.Text>
                            <Button style={{ width: '12em', marginTop: '0.5em' }} variant="outline-primary" as={Link} to="../reserva">{Idioma9.frase}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <Card className='shadow text-center mx-auto'>
                        <Card.Img style={{ width: '14em' }} variant=" mx-auto mt-3 rounded" src={Idioma10.bandera} />
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'><h4 style={{ fontWeight: 'bold' }}>{Idioma10.idioma}</h4></Card.Title>
                            <Card.Text className='textoTarj w-100'>
                                {Idioma10.descripcion}
                                <hr />
                                Idiomas en los que se habla {Idioma10.idioma}: {Idioma10.paises}
                            </Card.Text>
                            <Button style={{ width: '12em', marginTop: '0.5em' }} variant="outline-primary" as={Link} to="../reserva">{Idioma10.frase}</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={8}>
                    <Card className='shadow text-center mx-auto' style={{ backgroundColor: '#0066cc' }}>
                        <Card.Body className='text-center mx-auto'>
                            <Card.Title className='text-center pb-1'>
                                <h4 style={{ fontWeight: 'bold' }}>
                                    Por otros idiomas envíanos un mensaje
                                </h4>
                            </Card.Title>
                            <Button style={{ width: '12em', paddingTop: '0.5rem' }} variant="outline-light" as={Link} to="../contacto"><h5>Aquí</h5></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};
export default Idiomas