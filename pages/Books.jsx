import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <>
      <h1>I nostri libri</h1>
      {books.map((currentBook) => {
        return (
          <div key={currentBook.id}>
            <BookCard book={currentBook} />
            <Link to={`/books/${currentBook.id}`}>Leggi di più</Link>
          </div>
        );
      })}
    </>
  );
}
