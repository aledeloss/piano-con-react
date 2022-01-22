import { useState } from 'react';

const useTocarNota = (nota) => {
  const [estaSonando, setEstaSonando] = useState('');
  const [melodia, setMelodia] = useState([]);

  setEstaSonando(nota.nombre);
  console.log('click');
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

  return estaSonando;
};

export default useTocarNota;
