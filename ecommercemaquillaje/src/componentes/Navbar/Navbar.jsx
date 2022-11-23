function Navbar() {
  return (
    <div>
      <nav className="navbar2">
        <div className="container-fluid">
          <div className="">
            <ul
              className="nav mb-2 mb-lg-0 pt-2"
              style={{ flexDireccion: "row" }}
            >
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                  Inicio
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul className="dropdown-menu bg-light">
                  <li>
                    <a className="dropdown-item navbarText" href="#">
                      Todos los productos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item navbarText" href="#">
                      Feria online
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item navbarText" href="#">
                      Labios
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contactos
                </a>
              </li>
              <li className="nav-item ms-auto">
                <a className="btn position-relative text-white">
                  <h5>
                    <i className="bi bi-cart"></i>
                  </h5>
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
