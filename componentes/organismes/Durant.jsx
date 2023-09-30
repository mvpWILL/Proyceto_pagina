import React, { useState } from 'react';
import { durant } from '../../base/database';
 import Info_durant from '../moleculas/Inf_durant';

function Inf_durant() {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const estiloBoton = {
    backgroundColor: 'grey',  
    color: 'white', 
    padding: '12px 24px',  
    border: 'none',  
    borderRadius: '5px',  
    cursor: 'pointer',  
    fontSize: '15px',  
    fontWeight: 'bold',  
    
  };

  return (
    <div>
        {durant.length > 0 && (
            <div key={durant[0].nombre}>
              <img
                src={durant[0].logo}
                alt={durant[0].nombre}
                style={{ width: '200px', height: '200px' }}
                className="player-card"
              />
               
            
            </div>

          )}
          <br />
      <button style={estiloBoton} onClick={() => setMostrarInfo(!mostrarInfo)}>
        {mostrarInfo ? 'Ocultar Información' : 'Mostrar Información'}
      </button>
      {mostrarInfo && (
        <div style={{ textAlign: "center", display: "flex", justifyContent: "space-between" }}>
         <Info_durant/ >
        </div>
      )}
    </div>
  );
}

export default Inf_durant;

