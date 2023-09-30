import React from "react";
import database, { title } from "../../base/database";
function Header() {
  return (
    <header className="text-center bg-dark text-danger p-3">
      {title.map((titulo)=>(
        <h1>{titulo.info}</h1>
      ))}
      
    </header>
  );
}

export default Header;

 