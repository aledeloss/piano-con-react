import React, { useState } from 'react';

import '../../App.css';

export const Tecla = ({
  nota,
  handleClick,
  handleKeyPress,
  melodia,
  setMelodia,
}) => {
  const [estaSonando, setEstaSonando] = useState('');

  const handleClick2 = (nota) => {
    console.log(nota);
    setEstaSonando(nota.nombre);
    const sonido = new Audio(nota.link);
    sonido.play();

    if (melodia) {
      setMelodia([...melodia, nota]);
    } else {
      setMelodia([nota]);
    }

    setTimeout(() => {
      setEstaSonando('');
    }, 300);
  };
  return (
    <div
      className={`nota ${estaSonando === nota.nombre && 'estaSonando'}`}
      onClick={() => handleClick(nota)}
      onkeypress={() => handleKeyPress(nota)}
    >
      {nota.tieneSostenido && <div className='negra'></div>}
      {nota.tecla}
    </div>
  );
};
