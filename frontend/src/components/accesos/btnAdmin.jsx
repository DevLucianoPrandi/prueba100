import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Admin from '../admin/admin';

function BtnAdmin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="danger" className='shadow fw-bolder' type="submit" value="admin" as={Link} to={Admin} size='m' onClick={handleShow}>
        Accede como administrador!
      </Button>

    </div>
  );
}

export default BtnAdmin