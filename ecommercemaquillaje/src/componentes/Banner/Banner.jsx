import React from "react";

function Banner() {
  return (
    <div
      id="carouselExampleControls"
    //   className="carousel slide mx-md-5 px-md-5 mb-4"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="//d3ugyf2ht6aenh.cloudfront.net/stores/967/629/themes/material/1-slide-1667174371077-1984486106-4674f3404e979a8a4f1336b7fb0f53231667174374-1024-1024.webp?1008424824"
            className="d-block w-100"
            alt="Imagen del carrusel 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="//d3ugyf2ht6aenh.cloudfront.net/stores/967/629/themes/material/1-slide-1667174371077-1984486106-4674f3404e979a8a4f1336b7fb0f53231667174374-1024-1024.webp?1008424824"
            className="d-block w-100"
            alt="Imagen del carrusel 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="//d3ugyf2ht6aenh.cloudfront.net/stores/967/629/themes/material/1-slide-1667174371077-1984486106-4674f3404e979a8a4f1336b7fb0f53231667174374-1024-1024.webp?1008424824"
            className="d-block w-100"
            alt="Imagen del carrusel 3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
