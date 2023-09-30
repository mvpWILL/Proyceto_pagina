import React, { useState } from 'react';
import Info from '../moleculas/Inf_curry';
import { curry } from '../../base/database';

function App() {
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
    <div  >
       <div key={curry[0].nombre}>
                <img
                  src={curry[0].logo}
                  alt={curry[0].nombre}
                  style={{ width: '200px', height: '200px' }}
                  className="player-card"
                />  </div>
                <br />
      <button style={estiloBoton} onClick={() => setMostrarInfo(!mostrarInfo)}>
        {mostrarInfo ? 'Ocultar Información' : 'Mostrar Información'}
      </button>
      {mostrarInfo && (
        <div style={{ textAlign: "center", display: "flex", justifyContent: "space-between" }}>
         {curry.length > 0 && (
                   <Info/>
            )}
        </div>
      )}
    </div>
  );
}

export default App;
