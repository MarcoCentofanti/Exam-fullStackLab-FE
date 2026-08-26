import { NavLink } from "react-router-dom";
import { useSavedBooks } from "../contexts/SavedBooksContext";

import styles from "./Header.module.css";

export default function Header() {
  const { savedBooks } = useSavedBooks();

  return (
    <header>
      <nav className={`navbar navbar-expand-md ${styles.navbar}`}>
        <div className="container">
          <NavLink className={`navbar-brand ${styles.brand}`} to="/">
            Libreria Verde
          </NavLink>
          <span className={`badge ms-2 ${styles.counter}`}>
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
                <NavLink className={`nav-link ${styles.navLink}`} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${styles.navLink}`} to="/books">
                  I nostri libri
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${styles.navLink}`}
                  to="/contacts"
                >
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
