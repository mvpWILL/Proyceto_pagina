import React, { useState } from 'react';
import { curry } from '../../base/database';

function Logros() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrarInfo(!mostrarInfo)}>
        {mostrarInfo ? 'Ocultar Información' : 'Mostrar Información'}
      </button>
      {mostrarInfo && (
        <div style={{ textAlign: "center" }}>
          {curry && curry.length > 0 ? (
            <div>
              <h2>{curry[0].info}</h2>
              <p>Draft: {curry[0].Draft}</p>
              <p>Pick: {curry[0].pick}</p>
              <p>Temporadas: {curry[0].Temporadas}</p>
              <p>Playoffs: {curry[0].Playoffs}</p>
              <p>Finales: {curry[0].Finales}</p>
              <h3>Logros:</h3>
              <ul>
                {curry[0].logros.map((logro, index) => (
                  <li key={index}>{logro}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No se encontró información.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Logros;
