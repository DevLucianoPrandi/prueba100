import React from 'react';
import Button from 'react-bootstrap/Button';
import '../alumnos/alumnos.css'

function BtnReset() {
  return (
    <div>
      <Button variant="danger" className='shadow' type="reset" value="Reset" size='m'>
        Borrar formulario
    </Button>

    </div>
  );
}

export default BtnReset