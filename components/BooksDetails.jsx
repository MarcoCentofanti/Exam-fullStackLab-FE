import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";

export default function BookDetails() {
  const params = useParams();
  const id = params.id;
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchBookDetails = () => {
    axios
      .get(`http://localhost:3000/api/books/${id}`)
      .then((res) => {
        setBookDetails(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setError("Impossibile caricare il libro");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchBookDetails, [id]);

  if (isLoading) {
    return <p>Caricamento in corso</p>;
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={() => navigate(-1)}>Indietro</button>
      </>
    );
  }

  return (
    <>
      {bookDetails.image && (
        <img
          src={`http://localhost:3000/${bookDetails.image}`}
          alt={`Copertina di ${bookDetails.title}`}
        />
      )}
      <h2>{bookDetails.title}</h2>
      <p>{bookDetails.author}</p>
      <p>{bookDetails.publication_year}</p>
      <p>{bookDetails.abstract}</p>
      {bookDetails.reviews &&
        (bookDetails.reviews.length > 0 ? (
          bookDetails.reviews.map((review) => {
            return <ReviewCard key={review.id} review={review} />;
          })
        ) : (
          <p>Nessuna recensione disponibile</p>
        ))}
      <button onClick={() => navigate(-1)}>Indietro</button>
    </>
  );
}
