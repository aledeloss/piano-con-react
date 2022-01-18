// TAREAS  para armar registro y replay de melodías:
// - Armar un array de melodía 
// - Agregar a. melodía, b. botón de play y c. botón de volver a empezar al html
// - Mostrar array en la pantalla
// - Que la función handleclick agregue la nota al array
// - Que el botón de play haga sonar todas las notas una después de la otra
// - Que el botón de volver a empezar borre el array.

import React, { useState } from 'react';
import './App.css';


function App() { 

const [estaSonando, setEstaSonando] = useState("");

const notas = [
  {
    nombre: "Do",
    link: require("./notes/do.wav"),
    tieneSostenido: true,
    tecla: "d"
  },
  {
    nombre: "Re",
    link: require("./notes/re.wav"),
    tieneSostenido: true,
    tecla: "f"
  },
  {
    nombre: "Mi",
    link: require("./notes/mi.wav"),
    tecla: "g"
  },
  {
    nombre: "Fa",
    link: require("./notes/fa.wav"),
    tieneSostenido: true,
    tecla: "h"
  },
  {
    nombre: "Sol",
    link: require("./notes/sol.wav"),
    tieneSostenido: true,
    tecla: "i"
  },
  {
    nombre: "La",
    link: require("./notes/la.wav"),
    tieneSostenido: true,
    tecla: "j"
  },
  {
    nombre: "Si",
    link: require("./notes/si.wav"),
    tecla: "k"
  },
]

const handleClick = (nota) => {
  setEstaSonando(nota.nombre);
  const sonido = new Audio(nota.link);
  sonido.play();
  console.log(estaSonando);

  setTimeout(() => {
    setEstaSonando("");
  }, 300)
}

  return (
    <div className="App">
      <div className="titulo">
        <h1>Piano con react</h1>
        <h2>Hecho con sueño por Ale</h2>
          { estaSonando &&
            <h3>Está sonando la nota {estaSonando}</h3>
          }
      </div>

      <div className="contenedor"></div>
      {
        notas.map(nota => {
          return(
            <div className={`nota ${estaSonando === nota.nombre && 'estaSonando'}`}
            onClick={()=>handleClick(nota) }>
              { nota.tieneSostenido && <div className="negra"></div>}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
