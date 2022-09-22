import "bootstrap/dist/css/bootstrap.min.css";
import nodalLogo from "../../soloNodalLogo2.png";
import "../../cart.png";
import CartWidget from "./CartWidget.jsx";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg black navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand col-4" href="index.html">
            <img className="img-fluid" src={nodalLogo} alt="Logotipo Nodal" />
          </a>
            <ul className="navbar-nav my-2 my-lg-0">
              <li className="nav-item py-0 pl-3 d-flex align-items-center">
                <a className="nav-link py-0 pl-3" href=".">
                  TU CUENTA
                </a>
              </li>
              <li className="nav-item py-0 pl-3 d-flex align-items-center">
                <a className="nav-link py-0 pl-3" href="." tabIndex="-1">
                  CONTACTO
                </a>
              </li>
              <li className="nav-item py-0 pl-3 d-flex align-items-center">
                <a className="nav-link py-0 pl-3" href="." tabIndex="-2">
                  <CartWidget />
                </a>
              </li>
            </ul>
          </div>
      </nav>
    </div>    
  );
}

export default NavBar;
