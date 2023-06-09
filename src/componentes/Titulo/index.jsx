import React from "react";
import "./style.css";
import { colores } from "../../constantes/colores";

const Titulo = ({ title, subTitle }) => {
  return (
    <div>
      <h1 style={{color: colores.pantone}} className="encabezado">{title}</h1>
      <h2 style={{color: colores.pantone}} className="subEncabezado">{subTitle}</h2>
    </div>
  );
};

export default Titulo;
