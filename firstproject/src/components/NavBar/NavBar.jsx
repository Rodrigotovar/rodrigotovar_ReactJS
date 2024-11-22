import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar({ title }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/tee-shirt">
                T-shirts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/sudaderas">
                Sudaderas
              </Link>
            </li>
          </ul>
          <div className="ms-auto">
            <CartWidget cartCount={5} />
          </div>
        </div>
      </div>
    </nav>
  );
}
