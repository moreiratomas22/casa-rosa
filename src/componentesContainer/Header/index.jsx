import React from "react";
import { Titulo, NavBar } from "../../componentes";

import "./style.css";

const Header = () => {
  const title = "CASA ROSA";
  const subTitle = "Destileria Artesanal";
  const directions = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Nosotros",
      path: "/nosotros",
    },
    {
      name: "Productos",
      path: "/productos",
    },
    {
      name: "Menu",
      path: "/menu",
    },
  ];
  return (
    <header>
      <Titulo title={title} subTitle={subTitle} />
      <NavBar directions={directions}/>
    </header>
  );
};

export default Header;
