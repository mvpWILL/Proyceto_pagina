import React, { useState } from 'react';
import { kawhi } from '../../base/database';
 
 import Info_claw from '../moleculas/Inf_claw';

function Inf_kwahi() {
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
       <section>
            {kawhi.length > 0 && (
              <div key={kawhi[0].nombre}>
                <img
                  src={kawhi[0].logo}
                  alt={kawhi[0].nombre}
                  style={{ width: '200px', height: '200px' }}
                  className="player-card"
                />
               
              </div>
            )}
            <br />
             
          </section>
      <button style={estiloBoton} onClick={() => setMostrarInfo(!mostrarInfo)}>
        {mostrarInfo ? 'Ocultar Información' : 'Mostrar Información'}
      </button>
      {mostrarInfo && (
        <div style={{ textAlign: "center", display: "flex", justifyContent: "space-between" }}>
           <Info_claw/>
        </div>
      )}
    </div>
  );
}

export default Inf_kwahi;
