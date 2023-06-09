import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../alumnos/alumnos.css'

function BtnRegistro() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="light" className='shadow' type="submit" value="Registrate!" size='m' onClick={handleShow}>
        Registrate!
    </Button>

    </div>
  );
}

export default BtnRegistro