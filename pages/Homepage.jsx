import { Link } from "react-router-dom";
import heroImage from "../src/assets/hero-library.webp";
import styles from "./Homepage.module.css";

export default function Home() {
  return (
    <section className={`my-4 ${styles.hero}`}>
      <div className="row align-items-center g-5">
        <div className="col-12 col-md-6">
          <p className={styles.eyebrow}>Storie da scoprire</p>
          <h1 className="display-4 fw-bold">
            Benvenuto nella nostra libreria
          </h1>
          <p className="lead mb-4">
            Esplora il catalogo, leggi le recensioni e salva i tuoi prossimi
            libri.
          </p>
          <Link
            className={`btn btn-dark btn-lg ${styles.main_button}`}
            to="/books"
          >
            Scopri libri
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <img
            className={styles.heroImage}
            src={heroImage}
            alt="Interno della libreria"
          />
        </div>
      </div>
    </section>
  );
}
