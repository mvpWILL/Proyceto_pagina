import { curry } from "../../base/database"
 

function Info(){
    return(
        <section>
        {curry.length > 0 && (
          <div>
            {curry.map((chef, index) => (
              <div key={index}>
                
                <h2>{chef.apodo}</h2>
                {chef.nombre && <p>Nombre: {chef.nombre}</p>}
                {chef.position && <p>Posición: {chef.position}</p>}
                {chef.nacionalidad && <p>Nacionalidad: {chef.nacionalidad}</p>}
                {chef.Dorsal && <p>Dorsal: {chef.Dorsal}</p>}
                {chef.Equipo && <p>Equipo: {chef.Equipo}</p>}
                {chef.Altura && <p>Altura: {chef.Altura}</p>}
                {chef.Edad && <p>Edad: {chef.Edad}</p>}
                {chef.Fecha && <p>Fecha de nacimiento: {chef.Fecha}</p>}
                {chef.logros && <p><h2>Logros:</h2> {chef.logros}</p>}
              </div>
            ))}
          </div>
        )}
      </section>
    )
}

export default Info;