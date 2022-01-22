import React from 'react';
import '../../App.css';

const Encabezado = ({ estaSonando }) => {
  return (
    <div className='titulo'>
      <h1>PIANULI</h1>
      {estaSonando && <h3>Está sonando la nota {estaSonando}</h3>}
    </div>
  );
};

export default Encabezado;
