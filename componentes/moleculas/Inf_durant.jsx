import { durant } from "../../base/database";
function Info_durant(){
    return(
        <section>
        {durant.length > 0 && (
          <div key={durant[0].nombre}>
            <table>
              {durant.map((d, index) => (
                <div key={index}>
                  <h2>{d.apodo}</h2>
                  {d.nombre && <p>Nombre: {d.nombre}</p>}
                  {d.position && <p>Posición: {d.position}</p>}
                  {d.nacionalidad && <p>Nacionalidad: {d.nacionalidad}</p>}
                  {d.Dorsal && <p>Dorsal: {d.Dorsal}</p>}
                  {d.Equipo && <p>Equipo: {d.Equipo}</p>}
                  {d.Altura && <p>Altura: {d.Altura}</p>}
                  {d.Edad && <p>Edad: {d.Edad}</p>}
                  {d.Fecha && <p>Fecha de nacimiento: {d.Fecha}</p>}
                  {d.logros && <p><h2>Logros:</h2> {d.logros}</p>}
                </div>
              ))}
            </table>
          </div>
        )}
      </section>
    )
}

export default Info_durant;