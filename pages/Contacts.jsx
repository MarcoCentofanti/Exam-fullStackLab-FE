export default function Contacts() {
  return (
    <section className="py-4">
      <h1>Contatti</h1>

      <p className="lead mb-4">
        Contattaci oppure vieni a trovarci nella nostra libreria.
      </p>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4">Dove trovarci</h2>

              <address className="mb-0">
                Via dei Libri 10
                <br />
                00100 Roma
                <br />
                <a href="mailto:info@libreria.it">info@libreria.it</a>
                <br />
                <a href="tel:+390612345678">06 12345678</a>
              </address>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4">Orari</h2>

              <ul className="list-unstyled mb-0">
                <li>Lunedì – Venerdì: 9:00 – 19:00</li>
                <li>Sabato: 9:00 – 13:00</li>
                <li>Domenica: chiuso</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
