export default function ReviewCard(props) {
  const { name, vote, text } = props.review;

  return (
    <article className="card h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <h3 className="card-title h5 mb-0">{name}</h3>
          <span className="badge text-bg-dark">Voto: {vote}/5</span>
        </div>
        <p className="card-text mb-0">{text}</p>
      </div>
    </article>
  );
}
