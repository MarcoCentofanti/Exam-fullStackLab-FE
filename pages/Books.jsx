import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import BookCard from "../components/BookCard";

export default function Books() {
  const [books, setBooks] = useState([]);

  const endpoint = "http://localhost:3000/api/books";

  const fetchBooks = () => {
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchBooks, []);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>I nostri libri</h1>
        <Link className="btn btn-dark mb-4" to="/books/create">
          Aggiungi libro
        </Link>
      </div>
      <div className="row g-4">
        {books.map((currentBook) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={currentBook.id}>
              <BookCard book={currentBook} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
