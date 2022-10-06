import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import nodalLogo from "../../soloNodalLogo2.png";
import "../../cart.png";
import CartWidget from "./CartWidget.jsx";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand col-2" to="/">
            <img className="img-fluid" src={nodalLogo} alt="Logotipo Nodal" />
          </Link>
            <ul className="navbar-nav my-2 my-lg-0">
              <li className="nav-item py-0 pl-3 d-flex align-items-center">
                <Link className="nav-link py-0 pl-3" to="/category/terror">
                  TERROR
                </Link>
              </li>
              <li className="nav-item py-0 pl-3 d-flex align-items-center">
                <Link className="nav-link py-0 pl-3" to="/category/comedia" tabIndex="-1">
                  COMEDIA
                </Link>
              </li>
              <li className="nav-item py-0 pl-3 d-flex align-items-center">
                <Link className="nav-link py-0 pl-3" to="/cart" tabIndex="-2">
                  <CartWidget />
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </div>    
  );
}

export default NavBar;
