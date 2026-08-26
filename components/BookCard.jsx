import { Link } from "react-router-dom";
import { useSavedBooks } from "../contexts/SavedBooksContext";
import styles from "./BookCard.module.css";

export default function BookCard({ book }) {
  const { id, title, author, publication_year, abstract } = book;
  const { addSavedBook } = useSavedBooks();

  return (
    <article className={`card h-100 ${styles.card}`}>
      <div className="card-body d-flex flex-column">
        <h3 className="card-title">{title}</h3>
        <p className={`card-subtitle mb-3 ${styles.meta}`}>
          {author} - {publication_year}
        </p>
        <p className="card-text">{abstract}</p>
        <div className="mt-auto d-flex gap-2 flex-wrap">
          <Link
            className={`btn btn-dark ${styles.main_button}`}
            to={`/books/${id}`}
          >
            Leggi di più
          </Link>
          <button
            className={`btn btn-outline-dark ${styles.button}`}
            type="button"
            onClick={() => addSavedBook(book)}
          >
            Salva
          </button>
        </div>
      </div>
    </article>
  );
}
