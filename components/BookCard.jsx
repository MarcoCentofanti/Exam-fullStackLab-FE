export default function BookCard({ book }) {
  const { title, author, publication_year, abstract } = book;

  return (
    <>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{publication_year}</p>
      <p>{abstract}</p>
    </>
  );
}
