import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="text-center py-5">
      <p className="display-1 fw-bold mb-0">404</p>

      <h1>Pagina non trovata</h1>

      <p className="lead">
        La pagina richiesta non esiste oppure è stata spostata.
      </p>

      <Link className="btn btn-dark" to="/">
        Torna alla Home
      </Link>
    </section>
  );
}
