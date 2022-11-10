function Navbar() {
  return (
    <div>
      {/* <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-text">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Todos los productos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Feria online
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Labios
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="">Contactos</a>
              </li>
              <a className="btn position-relative">
                <i className="bi bi-cart"></i>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.60em" }}
                >
                  99+
                </span>
              </a>
            </ul>
          </span>
        </div>
      </nav> */}

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <div className="navbar" id="">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{flexDireccion:"row"}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Productos
          </a>
          <ul className="dropdown-menu bg-light">
            <li><a className="dropdown-item" href="#">Todos los productos</a></li>
            <li><a className="dropdown-item" href="#">Feria online</a></li>
            <li><a className="dropdown-item" href="#">Labios</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contactos</a>
        </li>
        <li className="nav-item">
        <a className="btn position-relative">
                <i className="bi bi-cart"></i>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.60em" }}
                >
                  3
                </span>
              </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
