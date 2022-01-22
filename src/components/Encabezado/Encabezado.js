import React from 'react';
import '../../App.css';

const Encabezado = ({ estaSonando }) => {
  return (
    <section className='titulo'>
      <h2>PIANULI</h2>
      {estaSonando && <h3>Está sonando la nota {estaSonando}</h3>}
    </section>
  );
};

export default Encabezado;
