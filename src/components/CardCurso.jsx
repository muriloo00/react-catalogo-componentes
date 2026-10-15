function CardCurso({ nome, duracao, modalidade, nivel }) {
  return (
    <article className="card-curso">
      <h3>{nome}</h3>
      <p><strong>Duração:</strong> {duracao}</p>
      <p><strong>Modalidade:</strong> {modalidade}</p>
      <p><strong>Nível:</strong> {nivel}</p>
    </article>
  )
}

export default CardCurso