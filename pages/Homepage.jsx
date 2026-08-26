import { Link } from "react-router-dom";
import heroImage from "../src/assets/hero.png";

export default function Home() {
  return (
    <section className="py-5">
      <div className="row align-items-center g-5">
        <div className="col-12 col-md-6">
          <h1 className="display-4 fw-bold">Benvenuto nella nostra libreria</h1>
          <p className="lead">La migliore libreria del web</p>
          <Link className="btn btn-dark btn-lg" to="/books">
            Scopri libri
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded shadow"
            src={heroImage}
            alt="Interno della libreria"
          />
        </div>
      </div>
    </section>
  );
}
