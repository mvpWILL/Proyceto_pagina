 import { kawhi } from "../../base/database";

function Info_claw(){
    return(
        <section>
            {kawhi.length > 0 && (
              <div key={kawhi[0].nombre}>
                 
                <table>
                  {kawhi.map((k, index) => (
                    <div key={index}>
                    <h2>{k.apodo}</h2>
                    {k.nombre && <p>Nombre: {k.nombre}</p>}
                    {k.position && <p>Posición: {k.position}</p>}
                    {k.nacionalidad && <p>Nacionalidad: {k.nacionalidad}</p>}
                    {k.Dorsal && <p>Dorsal: {k.Dorsal}</p>}
                    {k.Equipo && <p>Equipo: {k.Equipo}</p>}
                    {k.Altura && <p>Altura: {k.Altura}</p>}
                    {k.Edad && <p>Edad: {k.Edad}</p>}
                    {k.Fecha && <p>Fecha de nacimiento: {k.Fecha}</p>}
                    {k.logros && <p> <h2>Logros: </h2> {k.logros}</p>}
                  </div>
                  ))}
                </table>
              </div>
            )}
          </section>
    )
}

export default Info_claw;