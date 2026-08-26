import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const { id, title, author, publication_year, abstract } = book;

  return (
    <article className="card h-100">
      <div className="card-body d-flex flex-column">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle mb-3 text-body-secondary">
          {author} - {publication_year}
        </p>
        <p className="card-text">{abstract}</p>
        <Link
          className="btn btn-dark mt-auto align-self-start"
          to={`/books/${id}`}
        >
          Leggi di più
        </Link>
      </div>
    </article>
  );
}
