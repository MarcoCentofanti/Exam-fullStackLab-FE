export default function ReviewCard(props) {
  const { name, vote, text } = props.review;

  return (
    <>
      <p>Voto: {vote}/5</p>
      <p>{text}</p>
      <h3>{name}</h3>
    </>
  );
}
