import axios from "axios";

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
    <div>
      <h1>I nostri libri</h1>
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
