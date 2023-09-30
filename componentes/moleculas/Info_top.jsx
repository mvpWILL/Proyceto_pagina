import database from "../../base/database";
import { lebron } from "../../base/database";

function Info_top(){
    return(
        <>
        {database.find((player) => player.nombre === 'Lebron Raymone James') && (
            <section>
              <div style={{ margin: '0 auto' }}>
                <table
                  style={{ margin: '0 auto', border: '1px solid black' }}
                  
                >
                  <tbody>
                    <tr>
                      <td style={{ border: '1px solid black' }}>
                        <h3>{lebron[0].info}</h3>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black' }}>
                        <strong>Draft:</strong> {lebron[0].Draft}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black' }}>
                        <strong>Pick:</strong> {lebron[0].pick}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black' }}>
                        <strong>Temporadas:</strong> {lebron[0].Temporadas}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black' }}>
                        <strong>Playoffs:</strong> {lebron[0].Playoffs}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black' }}>
                        <strong>Finales:</strong> {lebron[0].Finales}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: '1px solid black' }}>
                        <h3>Logros:</h3>
                        <ul>
                          {lebron[0].logros.map((logro, index) => (
                            <li key={index}>{logro}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )} </>
    )
   
}

export default Info_top;