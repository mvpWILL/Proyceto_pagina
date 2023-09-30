import React from 'react';
import Header from '../componentes/organismes/Header';
 import Titulo_2 from '../componentes/moleculas/Titulo_bloque_2';
import Top_1 from '../componentes/organismes/Top';
import App from '../componentes/organismes/Curry';
import Inf_kwahi from '../componentes/organismes/Kwahi';
import Inf_durant from '../componentes/organismes/Durant';
 import Banner from '../componentes/moleculas/Banner';
  
const containerStyle = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
  marginBottom: '20px',
};
 
function Home() {
  return (
    <div>
      <Header />
      <br />
      <Top_1 />
      <Titulo_2 />
      <div style={containerStyle}>
        <br />
        <App />
        <br />
        <Inf_kwahi />
        <br />
        <Inf_durant />
      </div>
      <br />
      <Banner/>
    <br />
    <br />
    <br />
    </div>
  );
}

export default Home;
