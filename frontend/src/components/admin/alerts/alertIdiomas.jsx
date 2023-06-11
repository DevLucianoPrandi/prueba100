import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertIdiomas() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" className='w-100'>
        <Alert.Heading>Cuidado!</Alert.Heading>
        <p>
          Estás por eliminar uno o más idiomas seleccionados. Tené en cuenta que <span style={{ fontWeight:'bolder'}}>esta acción es irreversible!</span> <br />Estás seguro que querés continuar ?
        </p>
      </Alert>
    );
  }
}

export default AlertIdiomas;