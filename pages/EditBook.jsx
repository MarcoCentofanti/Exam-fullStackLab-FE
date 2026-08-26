import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CreateBook.module.css";

export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const endpoint = `http://localhost:3000/api/books/${id}`;

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publication_year: "",
    abstract: "",
    image: "",
  });

  function handleFormData(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData({ ...formData, [fieldName]: fieldValue });
  }
  function fetchBook() {
    axios
      .get(endpoint)
      .then((res) => {
        const { title, author, publication_year, abstract, image } = res.data;

        setFormData({
          title,
          author,
          publication_year,
          abstract,
          image: image || "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put(endpoint, formData)
      .then(() => {
        navigate(`/books/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(fetchBook, [endpoint]);
  return (
    <section className={styles.formPage}>
      <div className={styles.formPanel}>
        <h1 className="mb-4">Modifica un libro</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="title">
              Titolo
            </label>
            <input
              required
              className="form-control"
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleFormData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="author">
              Autore
            </label>
            <input
              required
              className="form-control"
              id="author"
              name="author"
              type="text"
              value={formData.author}
              onChange={handleFormData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="publication_year">
              Anno di pubblicazione
            </label>
            <input
              required
              className="form-control"
              id="publication_year"
              name="publication_year"
              type="number"
              value={formData.publication_year}
              onChange={handleFormData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="abstract">
              Descrizione
            </label>
            <textarea
              required
              className="form-control"
              id="abstract"
              name="abstract"
              rows="5"
              value={formData.abstract}
              onChange={handleFormData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="image">
              Percorso immagine
            </label>
            <input
              className="form-control"
              id="image"
              name="image"
              type="text"
              value={formData.image}
              onChange={handleFormData}
            />
          </div>
          <button
            className={`btn btn-dark ${styles.main_button}`}
            type="submit"
          >
            Salva
          </button>
        </form>
      </div>
    </section>
  );
}
