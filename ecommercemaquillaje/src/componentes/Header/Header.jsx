function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        
          <a className="navbar-brand me-auto bg-info" href="#"></a>
          <div className="mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quasi harum hic quo quas ut pariatur iure, eum nihil porro.
            </div>    
          <form className="" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="bi bi-person-fill"></i>
                  Crear cuenta
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Iniciar sesion
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
