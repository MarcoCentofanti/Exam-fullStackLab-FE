import axios from "axios";

import { useState, useEffect } from "react";

import style from "./Books.module.css";
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
      <div className={style.books}>
        {books.map((currentBook) => {
          return (
            <div key={currentBook.id}>
              <BookCard book={currentBook} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
