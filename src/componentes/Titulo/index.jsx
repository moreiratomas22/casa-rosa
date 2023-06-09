import React from "react";
import "./style.css";

const Titulo = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className="encabezado">{title}</h1>
      <h2 className="subEncabezado">{subTitle}</h2>
    </div>
  );
};

export default Titulo;
