import React from "react";

function CardProdDest(props) {
  return (
    <div className="card mx-auto my-3" style={{ width: "18rem" }}>
      <img
        src={props.img}
        className="card-img-top"
        alt="img card"
      />

      <div className="card-img-overlay">
        <p className="text-end">
          <strong className="bg-pink rounded-pill px-2 py-1 text-white">56% OFF</strong>
        </p>
      </div>

      <div className="card-body">
        <a className="me-auto text-start" href="">
          POLVO DE HADAS FAVORBEAUTY
        </a>
        <p className="text-start">
          <strike>$3.960</strike> $1.760
        </p>
        <p className="card-text text-start">3 cuotas de $586,67 sin interés</p>
      </div>
    </div>
  );
}

export default CardProdDest;
