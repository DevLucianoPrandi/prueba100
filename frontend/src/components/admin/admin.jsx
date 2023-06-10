
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AdmUsuarios from './admUsuarios';
function Admin() {

  const [key, setKey] = useState('usuarios');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="usurios" title="Usuarios">
        <AdmUsuarios />
      </Tab>
      <Tab eventKey="profile" title="Idiomas">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Cursos" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Admin
