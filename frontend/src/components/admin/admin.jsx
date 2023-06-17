
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AdmUsuarios from './admUsuarios';
import AdmIdiomas from './admIdiomas';
import AdmCursos from './admCursos';
function Admin() {

  const [key, setKey] = useState('cursos');

  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="cursos" title="Cursos">
        <AdmCursos />
      </Tab>
      <Tab eventKey="usuarios" title="Usuarios">
        <AdmUsuarios />
      </Tab>
      <Tab eventKey="idiomas" title="Idiomas">
        <AdmIdiomas />
      </Tab>

    </Tabs>
  );
}

export default Admin
