import React from "react";
import "../App.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import nodalLogo from "../soloNodalLogo2.png";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg black navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand col-4" href="index.html"><img className="img-fluid" src={nodalLogo} alt="Logotipo Nodal"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
            <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll text-end">
              <li className="nav-item py-0 pl-3">
                <a className="nav-link py-0 pl-3" href=".">TU CUENTA</a>
              </li>
              <li className="nav-item py-0 pl-3">
                <a className="nav-link py-0 pl-3" href="." tabindex="-1">CONTACTO</a>
              </li>
              <li className="nav-item py-0 pl-3">
                <a className="nav-link py-0 pl-3" href="." tabindex="-2">CARRITO</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
);
}

export default NavBar;
