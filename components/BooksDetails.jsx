import { useParams } from "react-router-dom";

export default function BooksDetails() {
  const params = useParams();
  const id = params.id;
  return <h1>BooksDetails {id}</h1>;
}
