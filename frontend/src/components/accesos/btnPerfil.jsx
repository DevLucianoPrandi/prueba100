import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Alumnos from '../alumnos/alumnos'

function BtnPerfil() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="outline-light" className='shadow' type="submit" value="perfil" as={Link} to={{Alumnos}} size='m' onClick={handleShow}>
        Accede a tu perfil!
      </Button>

    </div>
  );
}

export default BtnPerfil