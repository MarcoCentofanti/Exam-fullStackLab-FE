import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookDetails() {
  const params = useParams();
  const id = params.id;
  const [bookDetails, setbookDetails] = useState({});
  const navigate = useNavigate();

  const fetchbookDetails = () => {
    axios
      .get(`http://localhost:3000/api/books/${id}`)
      .then((res) => {
        setbookDetails(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(fetchbookDetails, [id]);

  return (
    <>
      <img
        src={`http://localhost:3000/${bookDetails.image}` || "public/test.png"}
        alt=""
      />
      <h2>{bookDetails.title}</h2>
      <p>{bookDetails.author}</p>
      <p>{bookDetails.publication_year}</p>
      <p>{bookDetails.abstract}</p>
      <button onClick={() => navigate(-1)}>Indietro</button>
    </>
  );
}
