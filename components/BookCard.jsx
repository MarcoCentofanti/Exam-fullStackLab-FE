import style from "./BookCard.module.css";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const { id, title, author, publication_year, abstract } = book;

  return (
    <div className={style.general}>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{publication_year}</p>
      <p>{abstract}</p>
      <Link to={`/books/${id}`}>Leggi di più</Link>
    </div>
  );
}
