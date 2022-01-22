import React, { useState } from 'react';
import './App.css';
import { notas } from './notas.js';

function App() {
  const [estaSonando, setEstaSonando] = useState('');
  const [melodia, setMelodia] = useState([]);

  const handleClick = (nota) => {
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

  const handleKeyPress = (e, nota) => {
    if (e.code === 'KeyH') {
      setEstaSonando(nota.nombre);
      const sonido = new Audio(nota.link);
      sonido.play();
    }
    if (melodia) {
      setMelodia([...melodia, nota]);
      var vistaMelodia = melodia.join(' ');
    } else {
      setMelodia([nota]);
      var vistaMelodia = melodia.join(' ');
    }
    setTimeout(() => {
      console.log(vistaMelodia);
      console.log(melodia);
    }, 1000);

    setTimeout(() => {
      setEstaSonando('');
    }, 300);
  };

  const tocarNota = async (melodia, nota) => {
    console.log(melodia[nota]);
    setEstaSonando(nota.nombre);
    const sonido = new Audio(melodia[nota].link);
    sonido.play();
  };

  const reproducirMelodia = async (melodia, i) => {
    const nota = i | 0;
    await tocarNota(melodia, nota).then(() => {
      if (nota < melodia.length - 1) {
        setTimeout(() => {
          reproducirMelodia(melodia, nota + 1);
        }, 300);
      }
    });
  };

  const renderMelodia = (melodia) => {
    const nombresMelodia = melodia.map((nota) => {
      return nota.nombre;
    });
    return nombresMelodia.join(' ');
  };
  console.log(typeof renderMelodia);

  const borrarMelodia = () => {
    console.log('Borraste la melodía');
    setMelodia([]);
  };

  return (
    <div className='App'>
      <div className='titulo'>
        <h1>Piano con react</h1>
        <h2>Hecho con sueño y entusiasmo por Ale</h2>
        {estaSonando && <h3>Está sonando la nota {estaSonando}</h3>}
      </div>

      <div className='contenedor'>
        {notas.map((nota) => {
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
        })}
      </div>

      <div className='botones'>
        <div className='play' onClick={() => reproducirMelodia(melodia)}>
          <p>Play</p>
        </div>
        <div className='borrar' onClick={() => borrarMelodia()}>
          <p>Borrar</p>
        </div>
      </div>
      <div className='display_melodia'>
        <p>Tu melodía es {melodia && renderMelodia(melodia)}</p>
      </div>
    </div>
  );
}

export default App;
