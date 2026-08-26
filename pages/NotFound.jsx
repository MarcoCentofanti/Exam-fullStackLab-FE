import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className="text-center py-5">
      <p className={`display-1 fw-bold mb-0 ${styles.code}`}>404</p>

      <h1>Pagina non trovata</h1>

      <p className="lead">
        La pagina richiesta non esiste oppure è stata spostata.
      </p>

      <Link className={`btn btn-dark ${styles.main_button}`} to="/">
        Torna alla Home
      </Link>
    </section>
  );
}
