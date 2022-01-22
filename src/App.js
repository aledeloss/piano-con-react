import React, { useState } from 'react';
import './App.css';
import Acciones from './components/Acciones/Acciones';
import { Tecla } from './components/Tecla/Tecla';
import Encabezado from './components/Encabezado/Encabezado';
import useTocarNota from './hooks/useTocarNota';
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
    // if (e.code === 'KeyH') {
    //   setEstaSonando(nota.nombre);
    //   const sonido = new Audio(nota.link);
    //   sonido.play();
    // }
    // if (melodia) {
    //   setMelodia([...melodia, nota]);
    // } else {
    //   setMelodia([nota]);
    // }
    // setTimeout(() => {
    //   setEstaSonando('');
    // }, 300);
  };

  // const tocarNotita = async (melodia, nota) => {
  //   console.log(melodia[nota]);
  //   setEstaSonando(nota.nombre);
  //   const sonido = new Audio(melodia[nota].link);
  //   sonido.play();
  // };

  // const reproducirMelodia = async (melodia, i) => {
  //   const nota = i | 0;
  //   await tocarNotita(melodia, nota).then(() => {
  //     if (nota < melodia.length - 1) {
  //       setTimeout(() => {
  //         reproducirMelodia(melodia, nota + 1);
  //       }, 300);
  //     }
  //   });
  // };

  // const renderMelodia = (melodia) => {
  //   const nombresMelodia = melodia.map((nota) => {
  //     return nota.nombre;
  //   });
  //   return nombresMelodia.join(' ');
  // };

  // const borrarMelodia = () => {
  //   console.log('Borraste la melodía');
  //   setMelodia([]);
  // };

  return (
    <div className='App'>
      <Encabezado estaSonando={estaSonando} />
      <div className='contenedor'>
        {notas.map((nota) => {
          return (
            <Tecla
              nota={nota}
              estaSonando={estaSonando}
              melodia={melodia}
              setMelodia={setMelodia}
              handleClick={handleClick}
              handleKeyPress={handleKeyPress}
            />
          );
        })}
      </div>

      <Acciones
        melodia={melodia}
        setMelodia={setMelodia}
        setEstaSonando={setEstaSonando}
      />
    </div>
  );
}

export default App;
