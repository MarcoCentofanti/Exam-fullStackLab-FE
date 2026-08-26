import { Link } from "react-router-dom";
import { useSavedBooks } from "../contexts/SavedBooksContext";

export default function BookCard({ book }) {
  const { id, title, author, publication_year, abstract } = book;
  const { addSavedBook } = useSavedBooks();

  return (
    <article className="card h-100">
      <div className="card-body d-flex flex-column">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle mb-3 text-body-secondary">
          {author} - {publication_year}
        </p>
        <p className="card-text">{abstract}</p>
        <div className="mt-auto d-flex gap-2 flex-wrap">
          <Link className="btn btn-dark" to={`/books/${id}`}>
            Leggi di più
          </Link>
          <button
            className="btn btn-outline-dark"
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
