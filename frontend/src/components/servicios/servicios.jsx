import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Extensivos from './extensivos.jsx';
import Intensivos from './intensivos.jsx';
import Particulares from './particulares.jsx';
import Conversacion from './conversacion.jsx';
import Literatura from './literatura.jsx';
import'./servicios.css';

function Servicios() {
  const [key, setKey] = useState('extensivos');

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k)}>

      <Tab eventKey="extensivos" title="Cursos extensivos">
        <Extensivos />
      </Tab>
      <Tab eventKey="intensivos" title="Cursos intensivos">
        <Intensivos />
      </Tab>
      <Tab eventKey="particulares" title="Clases particulares">
        <Particulares />
      </Tab>
      <Tab eventKey="conversacion" title="Talleres de conversación">
        <Conversacion />
      </Tab>
      <Tab eventKey="literatura" title="Literatura en grupo">
        <Literatura />
      </Tab>
    </Tabs>
  );
}

export default Servicios;