import { NavLink } from "react-router-dom";
import { useSavedBooks } from "../contexts/SavedBooksContext";

export default function Header() {
  const { savedBooks } = useSavedBooks();

  return (
    <header>
      <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            LOGO LIBRERIA
          </NavLink>
          <span className="badge text-bg-light ms-2">
            Salvati: {savedBooks.length}
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Apri o chiudi la navigazione"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/books">
                  I nostri libri
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">
                  Contatti
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
