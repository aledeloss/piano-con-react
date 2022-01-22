import React from 'react';
import '../../App.css';

const Acciones = ({ melodia, setMelodia, setEstaSonando }) => {
  const tocarNotita = async (melodia, nota) => {
    setEstaSonando(nota.nombre);
    const sonido = new Audio(melodia[nota].link);
    sonido.play();
  };

  const reproducirMelodia = async (melodia, i) => {
    if (melodia.length === 0) return;
    const nota = i | 0;
    await tocarNotita(melodia, nota).then(() => {
      if (nota < melodia.length - 1) {
        setTimeout(() => {
          reproducirMelodia(melodia, nota + 1);
        }, 300);
      }
    });
  };

  const borrarMelodia = () => {
    setMelodia([]);
  };

  const renderMelodia = (melodia) => {
    const nombresMelodia = melodia.map((nota) => {
      return nota.nombre;
    });
    return nombresMelodia.join(' ');
  };

  return (
    <section className='acciones'>
      <div className='botones'>
        <button className='play' onClick={() => reproducirMelodia(melodia)}>
          PLAY
        </button>
        <button className='borrar' onClick={() => borrarMelodia()}>
          BORRAR
        </button>
      </div>
      <div className='display_melodia'>
        <p>Tu melodía es {melodia.length > 0 && renderMelodia(melodia)}</p>
      </div>
    </section>
  );
};

export default Acciones;
