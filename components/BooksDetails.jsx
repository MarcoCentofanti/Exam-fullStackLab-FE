import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import placeholderImage from "../src/assets/book-placeholder.webp";
import styles from "./BooksDetails.module.css";

export default function BookDetails() {
  const params = useParams();
  const id = params.id;
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchBookDetails = () => {
    axios
      .get(`http://localhost:3000/api/books/${id}`)
      .then((res) => {
        setBookDetails(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setError("Impossibile caricare il libro");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchBookDetails, [id]);

  const coverImage = bookDetails.image
    ? `http://localhost:3000/${bookDetails.image}`
    : placeholderImage;

  if (isLoading) {
    return <p className={styles.loading}>Caricamento in corso…</p>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <button
          className={`btn btn-outline-dark ${styles.button}`}
          type="button"
          onClick={() => navigate(-1)}
        >
          Indietro
        </button>
      </div>
    );
  }

  return (
    <article className={styles.page}>
      <button
        className={`btn btn-outline-dark mb-4 ${styles.button}`}
        type="button"
        onClick={() => navigate(-1)}
      >
        ← Indietro
      </button>
      <div className="row g-4 align-items-start">
        <div className="col-12 col-md-4">
          <img
            className={`img-fluid rounded shadow-sm w-100 ${styles.cover}`}
            src={coverImage}
            alt={
              bookDetails.image
                ? `Copertina di ${bookDetails.title}`
                : `Copertina non disponibile per ${bookDetails.title}`
            }
          />
        </div>
        <div className="col-12 col-md">
          <h1>{bookDetails.title}</h1>
          <p className={styles.meta}>
            {bookDetails.author} - {bookDetails.publication_year}
          </p>
          <p>{bookDetails.abstract}</p>
        </div>
      </div>
      <section className="mt-5">
        <h2 className={`mb-4 ${styles.reviewTitle}`}>Recensioni</h2>
        {bookDetails.reviews &&
          (bookDetails.reviews.length > 0 ? (
            <div className="row g-3">
              {bookDetails.reviews.map((review) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4" key={review.id}>
                    <ReviewCard review={review} />
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="alert alert-secondary">
              Nessuna recensione disponibile
            </p>
          ))}
      </section>
    </article>
  );
}
