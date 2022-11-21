import React from "react";
import CategoriaBtn from "./CategoriaBtn";

function Categorias() {
  return (
    <div className="d-flex px-md-5 mb-3 py-3 border border-2 rounded flex-md-nowrap flex-wrap">
      <div className="px-3">Categorías:</div>
      <div>
        <CategoriaBtn title="FERIA ONLINE"/>
        <CategoriaBtn title="LABIOS"/>
        <CategoriaBtn title="OJOS"/>
        <CategoriaBtn title="ROSTRO"/>
        <CategoriaBtn title="ACCESORIOS"/>
        <CategoriaBtn title="RUBY ROSE"/>
        <CategoriaBtn title="DAPOP"/>
        <CategoriaBtn title="VICTORIA'S SECRET"/>
        <CategoriaBtn title="GIFT CARD"/>
        <CategoriaBtn title="RAMOS Y REGALOS"/>
        <CategoriaBtn title="CUIDADO PERSONAL"/>
      </div>
    </div>
  );
}

export default Categorias;
