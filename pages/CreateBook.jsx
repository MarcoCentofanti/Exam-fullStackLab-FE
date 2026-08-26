import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateBook() {
  const navigate = useNavigate();
  const endpoint = "http://localhost:3000/api/books";

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

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(endpoint, formData)
      .then(() => {
        navigate("/books");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <h1>Aggiungi un libro</h1>
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
        <button className="btn btn-dark" type="submit">
          Salva
        </button>
      </form>
    </>
  );
}
