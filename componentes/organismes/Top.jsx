 import database from "../../base/database.js";
import Info_top from "../moleculas/Info_top.jsx";
 

function Top_1(){
    return(
        <div>
        {database.map((player, index) => (
          <section
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={index}
            className="player-card"
          >
            <img
              style={{ width: '300px', height: '400px' }}
              src={player.logo}
              alt={player.nombre}
              className="player-image"
            />
            <div>
              <h2 className="text-center">{player.apodo}</h2>
              <ul>
                <h3>{player.nombre}</h3>
                <p>Nacionalidad: {player.nacionalidad}</p>
                <p>Edad: {player.Edad}</p>
                <p>Posición: {player.position}</p>
                <p>Dorsal: {player.Dorsal}</p>
                <p>Equipo: {player.Equipo}</p>
                <p>Altura: {player.Altura}</p>
                <p>Nacido el: {player.Fecha}</p>
              </ul>
            </div>
          </section>
        ))}
        <br />
        <br />
        <Info_top/>
      </div>
    );
}

export default Top_1;